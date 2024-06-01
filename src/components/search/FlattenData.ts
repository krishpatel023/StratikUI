import { StorageData } from "@/packages";
import { FileData } from "@/utils/constants";

type Content = {
  name: string;
  description: string;
  // tags: string[];
  version_included: string;
  display: boolean;
};

type ComponentItem = {
  name: string;
  content: Content;
  type: string;
  display: boolean;
};

type CategoryItem = {
  name: string;
  content: (ComponentItem | CategoryItem)[];
  type: string;
  version?: string;
  display: boolean;
};

export type FlattenedItem = {
  group: string;
  category: string;
  hash: string;
  name: string;
  // tags: string[];
  description: string;
  version_included: string;
  display: boolean;
};

export const flattenData = (): FlattenedItem[] => {
  const data: FileData[] = StorageData;
  const result: FlattenedItem[] = [];

  const processItem = (
    item: any,
    parentClass: string | null = null,
    parentCategory: string | null = null
  ) => {
    if (item.content && Array.isArray(item.content)) {
      item.content.forEach((childItem: any) =>
        processItem(childItem, parentClass || item.name, item.name)
      );
    } else if (item.content && typeof item.content === "object") {
      const { name, description, tags, version_included, display } =
        item.content;
      result.push({
        group: parentClass || "",
        category: parentCategory || "",
        hash: name.toLowerCase().replace(/\s+/g, "-"),
        name,
        //   tags,
        description,
        version_included,
        display: item.display,
      });
    }
  };

  data.forEach((item) => processItem(item));

  return result;
};
