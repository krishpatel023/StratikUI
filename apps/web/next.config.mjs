import nextMDX from "@next/mdx";
import { remarkPlugins } from "./src/utils/mdx/remark.mjs";
import { rehypePlugins } from "./src/utils/mdx/rehype.mjs";
import { recmaPlugins } from "./src/utils/mdx/recma.mjs";

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
  eslint: {
    // Warning: This is implemented as we want to use biome to lint the code. We have added the linting before the build step.
    ignoreDuringBuilds: true,
  }
};

export default withMDX(nextConfig);
