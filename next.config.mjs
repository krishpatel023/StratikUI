import nextMDX from "@next/mdx";
import { remarkPlugins } from "./src/utils/mdx/remark.mjs";
import { rehypePlugins } from "./src/utils/mdx/rehype.mjs";
import { recmaPlugins } from "./src/utils/mdx/recma.mjs";
import withSearch from "./src/utils/mdx/search.mjs";

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
  },
});
/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withSearch(withMDX(nextConfig));
