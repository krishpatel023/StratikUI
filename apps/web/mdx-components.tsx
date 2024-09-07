import {
  Anchor,
  BLOCK_QUOTE,
  LI,
  OL,
  UL,
  ImageComponent,
  H1,
  H2,
  TEXT,
  H3,
  BACKTICK,
  BOLD,
} from "@/components/mdx/MDX";
import { TABLE, TD, TH, TR } from "@/components/mdx/Table";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => H1({ children }),
    h2: ({ children }) => H2({ children }),
    h3: ({ children }) => H3({ children }),
    h4: ({ children }) => TEXT({ children }),
    h5: ({ children }) => TEXT({ children }),
    h6: ({ children }) => TEXT({ children }),
    p: ({ children }) => TEXT({ children }),
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
    code: (props) => <BACKTICK {...props} />,
    strong: (props) => <BOLD {...props} />,
    ...components,
  };
}
