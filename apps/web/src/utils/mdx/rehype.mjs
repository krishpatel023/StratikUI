import { slugifyWithCounter } from "@sindresorhus/slugify";
import * as acorn from "acorn";

// biome-ignore lint/suspicious/noShadowRestrictedNames: Necessary for MDX
import { toString } from "mdast-util-to-string";
import { mdxAnnotations } from "mdx-annotations";
import { visit } from "unist-util-visit";

function rehypeParseCodeBlocks() {
  return (tree) => {
    visit(tree, "element", (node, _nodeIndex, parentNode) => {
      if (node.tagName === "code" && node.properties.className) {
        parentNode.properties.language = node.properties.className[0]?.replace(/^language-/, "");
      }
    });
  };
}

function rehypeSlugify() {
  return (tree) => {
    const slugify = slugifyWithCounter();
    visit(tree, "element", (node) => {
      if (node.tagName === "h2" && !node.properties.id) {
        node.properties.id = slugify(toString(node));
      }
    });
  };
}

function rehypeAddMDXExports(getExports) {
  return (tree) => {
    const exports = Object.entries(getExports(tree));

    for (const [name, value] of exports) {
      for (const node of tree.children) {
        if (node.type === "mdxjsEsm" && new RegExp(`export\\s+const\\s+${name}\\s*=`).test(node.value)) {
          return;
        }
      }

      const exportStr = `export const ${name} = ${value}`;

      tree.children.push({
        type: "mdxjsEsm",
        value: exportStr,
        data: {
          estree: acorn.parse(exportStr, {
            sourceType: "module",
            ecmaVersion: "latest",
          }),
        },
      });
    }
  };
}

function getSections(node) {
  const sections = [];

  for (const child of node.children ?? []) {
    if (child.type === "element" && child.tagName === "h2") {
      sections.push(`{
        title: ${JSON.stringify(toString(child))},
        id: ${JSON.stringify(child.properties.id)},
        ...${child.properties.annotation}
      }`);
    } else if (child.children) {
      sections.push(...getSections(child));
    }
  }

  return sections;
}

export const rehypePlugins = [
  mdxAnnotations.rehype,
  rehypeParseCodeBlocks,
  rehypeSlugify,
  [
    rehypeAddMDXExports,
    (tree) => ({
      sections: `[${getSections(tree).join()}]`,
    }),
  ],
];
