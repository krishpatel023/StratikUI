import { StorageData } from "@/content/index";
import { FileData } from "@/utils/constants";

type Content = {
  name: string;
  description: string;
  tags: string[];
  version_included: string;
  display: boolean;
  id: string;
};

type ComponentItem = {
  name: string;
  content: Content;
  type: string;
  display: boolean;
};

export type FlattenedItem = {
  group: string;
  category: string;
  hash: string;
  name: string;
  tags: string[];
  description: string;
  version_included: string;
  display: boolean;
  id: string;
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
      const { name, description, tags, version_included, id, display } =
        item.content;
      if (display) {
        result.push({
          group: parentClass || "",
          category: parentCategory || "",
          hash: name.toLowerCase().replace(/\s+/g, "-"),
          name,
          tags,
          description,
          version_included,
          display,
          id,
        });
      }
    }
  };

  data.forEach((item) => processItem(item));

  return result;
};
