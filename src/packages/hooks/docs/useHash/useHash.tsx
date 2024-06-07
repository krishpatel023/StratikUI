import { DataDescription, ImplementationNode } from "@/utils/constants";
import { Helper, HelperString } from "./Helper";

const CodeTsx: string = `import { useState, useEffect } from "react";

const useHash = () => {
  const [hash, setHash] = useState<string | null>(null);

  const getHash = (): string | null => {
    if (typeof window === "undefined") return null;
    return window.location.hash.replace("#", "");
  };

  const addHash = (hash: string) => {
    window.location.hash = hash;
  };

  useEffect(() => {
    setHash(getHash());

    const handleHashChange = () => {
      setHash(getHash());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return { hash, addHash };
};

export default useHash;`;

const CodeJsx: string = `import { useState, useEffect } from "react";

const useHash = () => {
  const [hash, setHash] = useState(null);

  const getHash = () => {
    if (typeof window === "undefined") return null;
    return window.location.hash.replace("#", "");
  };

  const addHash = (hash) => {
    window.location.hash = hash;
  };

  useEffect(() => {
    setHash(getHash());

    const handleHashChange = () => {
      setHash(getHash());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return { hash, addHash };
};

export default useHash;`;

const Implementation: ImplementationNode[] = [
  {
    type: "code",
    content: [
      {
        name: "useHash",
        content: [
          { language: "tsx", code: CodeTsx },
          { language: "jsx", code: CodeJsx },
        ],
      },
      {
        name: "Implementation",
        content: [
          { language: "tsx", code: HelperString },
          { language: "jsx", code: HelperString },
        ],
      },
    ],
  },
  {
    type: "properties",
    content: {
      name: "Properties",
      dimensions: [1, 1, 2],
      data: [
        ["Property", "Type", "Description"],
        [
          "hash",
          "string | null",
          "The current hash value extracted from the URL. It is null if there is no hash value present.",
        ],
        [
          "addHash",
          "(hash: string) => void",
          "A function that allows you to programmatically add or update the hash value in the URL.",
        ],
      ],
    },
  },
];

const Data: DataDescription = {
  name: "useHash",
  description:
    "useHash is a custom React hook that simplifies working with URL hash values in Next.js applications. It allows you to easily retrieve and update the hash value, while ensuring proper hydration and avoiding mismatches between server-rendered and client-rendered HTML. The hook provides a seamless way to handle hash changes and keep your component in sync with the URL hash value.",
  implementation: Implementation,
  component: <Helper />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
