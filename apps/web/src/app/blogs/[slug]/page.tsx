import { PARTITION } from "@/components/mdx/Wrappers";
import { compileMDX } from "next-mdx-remote/rsc";
import { promises as fs } from "node:fs";
import path from "node:path";
import { useMDXComponents } from "../../../../mdx-components";
import Link from "next/link";
import type { IconProps } from "@/utils/constants";

interface Frontmatter {
  title: string;
  author: string;
  authorLink: string;
  readTime: string;
  date: string;
  tags: string[];
  category: string;
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const content = await fs.readFile(path.join(process.cwd(), "src/content/blogs", `${params.slug}.mdx`), "utf-8");
  const data = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
    components: { ...useMDXComponents({}), PARTITION },
  });

  return (
    <>
      <div className="mb-12">
        <Link
          href="/blogs"
          className="group text-foreground text-sm hover:underline hover:underline-offset-2 flex items-center gap-2"
        >
          <CheveronLeft className="size-4 group-hover:-translate-x-2 transition-all duration-300" />
          See all blogs
        </Link>
        <p className="text-secondary-foreground text-sm mt-8">
          Published on {data.frontmatter.date} • {data.frontmatter.readTime}
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold text-foreground mb-4 mt-4">{data.frontmatter.title}</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-secondary-foreground text-md">Author</span>
            <Link
              href={data.frontmatter.authorLink}
              target="_blank"
              rel="noreferrer"
              className="text-foreground text-lg hover:underline hover:underline-offset-2 w-max"
            >
              {data.frontmatter.author}
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-2">{data.content}</div>
    </>
  );
}

export const CheveronLeft = (props: IconProps) => (
  <svg height="200" width="200" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Cheveron Left Icon</title>
    <path d="M7.05 9.293L6.343 10L12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z" fill="currentColor" />
  </svg>
);
