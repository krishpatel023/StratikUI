import { H1, H2, TEXT } from "@/components/mdx/Headings";
import ImageComponent from "@/components/mdx/Image";
import { Anchor, BLOCK_QUOTE, LI, OL, UL } from "@/components/mdx/Misc";
import { TABLE, TD, TH, TR } from "@/components/mdx/Table";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => H1({ children }),
    h2: ({ children }) => H2({ children }),
    p: (props) => TEXT(props),
    img: (props) => <ImageComponent {...props} />,
    // LIST
    ul: (props) => <UL {...props} />,
    ol: (props) => <OL {...props} />,
    li: (props) => <LI {...props} />,
    // TABLE
    table: ({ children, ...props }) => TABLE({ children, ...props }),
    td: (props) => TD(props),
    tr: (props) => TR(props),
    th: (props) => TH(props),
    // MISC
    blockquote: (props) => <BLOCK_QUOTE {...props} />,
    a: (props) => Anchor(props),
    ...components,
  };
}
