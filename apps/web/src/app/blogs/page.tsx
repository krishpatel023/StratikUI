import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import { promises as fs } from "node:fs";
import path from "node:path";

interface Frontmatter {
  title: string;
  author: string;
  authorLink: string;
  readTime: string;
  date: string;
  tags: string[];
  category: string;
}

interface Blogs extends Frontmatter {
  link: string;
  key: string;
}

export default async function BlogListPage() {
  const content = await fs.readdir(path.join(process.cwd(), "src/content/blogs"), "utf-8");

  async function readTheData(file: string): Promise<Blogs> {
    const content = await fs.readFile(path.join(process.cwd(), "src/content/blogs", `${file}`), "utf-8");
    const data = await compileMDX<Frontmatter>({
      source: content,
      options: {
        parseFrontmatter: true,
      },
    });
    const name = file.split(".")[0].replaceAll(" ", "-").toLowerCase();
    return { ...data.frontmatter, link: `blogs/${name}`, key: name };
  }

  const data: Blogs[] = await Promise.all(
    content.map(async (file) => {
      if (file.endsWith(".mdx")) {
        return await readTheData(file);
      }
      return null;
    }),
  ).then((data) =>
    data.filter((item) => item !== null).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
  );

  return (
    <>
      <div className="px-8 md:px-40 py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-semibold text-foreground mb-10">Blogs</h1>
        <div className="text-secondary-foreground text-sm flex flex-col gap-4">
          {data.length === 0 ? (
            <span className="text-secondary-foreground text-lg">No Blogs Found</span>
          ) : (
            data.map((file) => (
              <Link
                type="button"
                key={file.key}
                className="w-full hover:bg-primary py-4 hover:px-4 rounded-lg text-start transition-all duration-300 hover:scale-[101%]"
                href={file.link}
              >
                <h1 className="text-xl md:text-2xl font-semibold text-foreground mb-4">{file.title}</h1>
                <p className="text-secondary-foreground text-sm">
                  {file.author} • {file.date} • {file.readTime}
                </p>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
}
