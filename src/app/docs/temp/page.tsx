import * as MdxContent1 from "@/docs/components/headers/Header_1.mdx";
import MdxContent2 from "@/docs/components/headers/Header_2.mdx";

export default function Page() {
  console.log("page", MdxContent1.data.title);

  return (
    <>
      <MdxContent1.default />
      <MdxContent2 />
    </>
  );
}
