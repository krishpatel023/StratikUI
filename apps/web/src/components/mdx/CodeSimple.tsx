import { BundledLanguage } from "shiki/bundle/web";
import CodeHighlight from "../ui/CodeHighlight";
import { CopyButton } from "../CopyButton";

export function CODE({
  children,
  withCounter = false,
}: {
  children: JSX.Element;
  withCounter?: boolean;
}) {
  const header = children.props?.language;

  const headerArray = header.split("|");

  const name = headerArray[0];
  const lang = headerArray[1];
  if (!lang)
    console.error(
      "Language not mentioned in code block. Please mention the language like this: \n```NAME|tsx\ncontent\n```"
    );

  const raw = children.props.children?.props.children;
  const lines = raw.split("\n");
  const code = lines.slice(0, lines.length - 1).join("\n");

  return (
    <div className="w-full rounded-lg border border-outline-secondary">
      <div className="rounded-t-[inherit] bg-primary px-5 py-2 flex justify-between items-center">
        <h1 className="text-base text-primary-foreground">{name}</h1>
        <CopyButton text={code} className="" />
      </div>
      <CodeHighlight
        code={code}
        lang={lang as BundledLanguage}
        withCounter={withCounter}
        skeletonClassName="min-h-12"
      />
    </div>
  );
}
