// -----------------------------------------------------
// DO NOT MODIFY THIS FILE
// -----------------------------------------------------

import * as fs from "fs";
import * as path from "path";

import { versionCheck } from "@/scripts/VersionCheck";
import { FileData } from "../utils/constants";

const FOLDER_TO_INCLUDE = ["primitives", "components", "hooks"];
const directoryPath = (folderName: string) => {
  return path.join(process.cwd(), "src/content/docs" + path.sep + folderName);
};

// Read the directory
export const readDirectory = (): FileData[] => {
  //It is a reccursive function which will go throught the directory and if found any then it will add it as per the type(Folder or File)
  function walkSync(dir: string, parentObjMain: FileData): FileData | null {
    let returnData: FileData | null = null;
    let parentObj: FileData = parentObjMain;
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
              name: file.split(".")[0].replace(/_/g, "-"),
              content: [],
              type: "class",
              version: "0.0.0",
              display: false,
            };
          }
        }
        //There will only be one layer of folder in between and hence if folder is there then it will be treated as a class. So return class will exist in that case and not in the case where it is a file.
        if (returnData) {
          const childData = walkSync(filePath, returnData);
          if (childData) {
            if (Array.isArray(parentObj.content)) {
              returnData = childData;
            }
          }
        }
      } else {
        // Case where it is a file.
        if (filePath.endsWith(".mdx")) {
          // Process to get the relative path.
          const relative_path = filePath.split(path.sep);
          var flag = false;
          var new_path = ".";
          for (let i = 0; i < relative_path.length; i++) {
            if (flag) {
              new_path = new_path + "/" + relative_path[i];
            }
            if (relative_path[i] === "docs") {
              flag = true;
              new_path = "./docs";
            }
          }

          // After Getting relative path if there will be any default export then it will be treated as a basic component. Otherwise it will be ignored.
          try {
            const content = require(`${new_path}`).Data;

            if (content) {
              returnData = {
                name: file,
                content: content,
                type: "basic",
                display: content.display,
              };
              // Version Check To display the NEW is Sidebar.
              const version_check = versionCheck(
                content.version_included,
                parentObj.version
              );
              if (version_check) {
                parentObj.version = content.version_included;
              }
              if (content.display === true) parentObj.display = true;
            }
          } catch (error) {
            console.log(error);
          }
        }
      }

      // Adding the return data to the parentObj's content.
      if (returnData) {
        if (Array.isArray(parentObj.content)) {
          parentObj.content.push(returnData);
          if (returnData.display === true) parentObj.display = true;
        }
        // So that if another file is a helper file than the return data is re-initialized and can be used in other files.
        returnData = null;
      }
    });
    // After all the children are iterated and we have the parentObj updated then we return it.
    return parentObj;
  }

  // Main function
  var files: FileData[] = [];

  for (let i = 0; i < FOLDER_TO_INCLUDE.length; i++) {
    const dirPath = directoryPath(FOLDER_TO_INCLUDE[i]);
    const data = walkSync(dirPath, {
      name: FOLDER_TO_INCLUDE[i],
      content: [],
      type: "category",
      display: false,
    });
    if (data) files.push(data);
  }

  return files;
};

// Adding the return vaule here so that it can be used at multiple places
export const StorageData: FileData[] = readDirectory();
