import * as fs from "fs";
import * as path from "path";

import { FileData, DataDescription } from "../utils/constants";
import { versionCheck } from "@/scripts/VersionCheck";

export const readDirectory = (): FileData[] => {
  //It is a reccursive function which will go throught the directory and if found any then it will add it as per the type(Folder or File)
  function walkSync(dir: string, parentObj: FileData): FileData | null {
    let returnData: FileData | null = null;
    const dirNames = dir.split(path.sep);

    const filesInDirectory = fs.readdirSync(dir);

    filesInDirectory.forEach((file) => {
      const filePath = path.join(dir, file);
      const isDirectory = fs.statSync(filePath).isDirectory();

      if (isDirectory) {
        // If the folder falls under components/primitives then assign it a type class
        if (parentObj.type === "category") {
          if (Array.isArray(parentObj.content)) {
            returnData = {
              name: file.split(".")[0],
              content: [],
              type: "class",
              version: "0",
            };
          }
        }
        //There will only be one layer of folder in between and hence if folder is there then it will be treated as a class. So return class will exist in that case and not in the case where it is a file.
        if (returnData) {
          const childData = walkSync(filePath, returnData);
          if (childData) {
            if (Array.isArray(returnData.content)) {
              // This will update the version so that any new components added in that class will be updated here with the highest version so that it can be checked at other place and if they are of latest version, 'NEW" tag can be added to them ( Mainly for the Sidebar)
              if (
                childData.type === "basic" &&
                !Array.isArray(childData.content)
              ) {
                const version_check = versionCheck(
                  childData.content.version_included,
                  returnData.version
                );
                if (version_check) {
                  returnData = {
                    ...returnData,
                    version: childData.content.version_included,
                  };
                }
              }
            }
            if (Array.isArray(returnData.content)) {
              returnData.content.push(childData);
            }
          }
        }
      } else {
        // Case where it is a file.
        if (filePath.endsWith(".tsx")) {
          // Process to get the relative path.
          const relative_path = filePath.split(path.sep);
          var flag = false;
          var new_path = ".";
          for (let i = 0; i < relative_path.length; i++) {
            if (flag) {
              new_path = new_path + "/" + relative_path[i];
            }
            if (relative_path[i] === "packages") {
              flag = true;
              new_path = ".";
            }
          }

          // After Getting relative path if there will be any default export then it will be treated as a basic component. Otherwise it will be ignored.
          try {
            const content = require(`${new_path}`).default;
            if (content) {
              returnData = { name: file, content: content, type: "basic" };
            }
          } catch (error) {}
        }
      }

      // Adding the return data to the parentObj's content.
      if (returnData) {
        if (Array.isArray(parentObj.content))
          parentObj.content.push(returnData);
      }
    });
    // After all the children are iterated and we have the parentObj updated then we return it.
    return parentObj;
  }

  // Main function
  var files: FileData[] = [];

  // Iterating through components
  const componentDirectory = path.join(
    process.cwd(),
    "src/packages/components"
  );
  // This will return the input object only but with updated content field
  const componentData = walkSync(componentDirectory, {
    name: "components",
    content: [],
    type: "category",
  });

  // Iterating through primitives
  const primitivesDirectory = path.join(
    process.cwd(),
    "src/packages/primitives"
  );
  // This will return the input object only but with updated content field
  const primitiveData = walkSync(primitivesDirectory, {
    name: "primitives",
    content: [],
    type: "category",
  });

  // Adding components and primitives to files
  if (componentData && primitiveData) {
    files = [componentData, primitiveData];
  }
  // Returning an FileData[]
  return files;
};

// Adding the return vaule here so that it can be used at multiple places
export const StorageData: FileData[] = readDirectory();