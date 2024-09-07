import { PARTITION } from "@/components/mdx/Wrappers";
import { compileMDX } from "next-mdx-remote/rsc";
import { promises as fs } from "node:fs";
import path from "node:path";
import { useMDXComponents } from "../../../../mdx-components";
import Link from "next/link";

interface Frontmatter {
  title: string;
  author: string;
  authorLink: string;
  readTime: string;
  date: string;
  tags: string[];
  category: string;
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
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
        <span className="text-secondary-foreground text-sm">
          Published on {data.frontmatter.date} • {data.frontmatter.readTime}
        </span>
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
