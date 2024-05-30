import { twMerge } from "tailwind-merge";

export const UL = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className={twMerge("my-6 ml-10 list-disc", className)} {...props} />
  );
};

export const OL = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLOListElement>) => {
  return (
    <ol className={twMerge("my-6 ml-10 list-decimal ", className)} {...props} />
  );
};

export const LI = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <li
      className={twMerge("mt-2 text-sm dark:text-neutral-300", className)}
      {...props}
    />
  );
};

export const BLOCK_QUOTE = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <blockquote
      className={twMerge("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    />
  );
};

export const HR = ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => {
  return <hr className="my-4 md:my-8" {...props} />;
};

export const TABLE = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLTableElement>) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-horizontal">
      <div className="w-full min-w-[800px] p-[1px] border border-slate-100 dark:border-none bg-gray-50 dark:bg-neutral-900/70 rounded-xl overflow-hidden">
        <table className="w-full" {...props}>
          {children}
        </table>
      </div>
    </div>
  );
};

export const TD = ({
  ...props
}: React.HTMLAttributes<HTMLTableCellElement>) => {
  return (
    <td
      className={twMerge(
        "py-3 text-sm dark:text-neutral-400 bg-white dark:bg-black px-4 break-words border border-gray-50 dark:border-neutral-900/70"
        //   i === data.data.length - 1 &&
        //     j === 0 &&
        //     "rounded-bl-xl ",
        //    === data.data.length - 1 &&
        //     j === data.dimensions.length - 1 &&
        //     "rounded-br-xl"
      )}
    >
      {props.children}
    </td>
  );
};

export const TH = ({
  ...props
}: React.HTMLAttributes<HTMLTableCellElement>) => {
  return (
    <th
      className={twMerge(
        "py-3 px-4 text-sm dark:text-neutral-300 text-start",
        "bg-transparent dark:bg-transparent font-semibold border-none"
      )}
      {...props}
    >
      {props.children}
    </th>
  );
};

export const TR = ({ ...props }: React.HTMLAttributes<HTMLTableRowElement>) => {
  return <tr {...props}>{props.children}</tr>;
};
