import fs from "fs";
import path from "path";
import {
  createDirectory,
  getFoldersInDir,
  getPathWithReferenceFromPackages,
  log,
  stringToDashedString,
  terminalLink,
} from "./helperFunctions";

import { SearchIndividualProps, SearchProps } from "@web/data/Search";

// -----------------------------------------------------------------------------------------
// This function will help to generate the log.tsx file in .stratik-ui folder of registry
// It will be used to generate the log file for the docs which will help us to debug the code well

let BUILD_LOG = "";

function addBuildLog(
  state: "default" | "error" | "success" | "warning" | "event",
  message: string,
  functionCalled?: string,
  folderPath?: string
) {
  const folderPathData = folderPath ? `\n${folderPath}\n` : "\n";
  const functionCalledData = functionCalled
    ? `\nfunction - ${functionCalled}`
    : "";
  BUILD_LOG += "\n";
  switch (state) {
    case "default":
      BUILD_LOG += "📄 " + message + functionCalledData + folderPathData;
      break;
    case "error":
      BUILD_LOG += "❌ " + message + functionCalledData + folderPathData;
      break;
    case "success":
      BUILD_LOG += "✅ " + message + functionCalledData + folderPathData;
      break;
    case "warning":
      BUILD_LOG += "⚠️ " + message + functionCalledData + folderPathData;
      break;
    case "event":
      const date = new Date();
      BUILD_LOG +=
        "📢 [" +
        date.toLocaleString() +
        "] " +
        message +
        functionCalledData +
        folderPathData;
      break;
    default:
      BUILD_LOG += "📄 " + message + functionCalledData + folderPathData;
  }
}

function publishBuildLog() {
  const dirPath = path.join(process.cwd(), ".stratik-ui");
  const logPath = path.join(process.cwd(), ".stratik-ui", "log.txt");

  createDirectory(dirPath);

  // check if the log file exists
  if (!fs.existsSync(logPath)) {
    fs.writeFileSync(logPath, "", "utf8");
  }
  const prevData = fs.readFileSync(logPath, "utf8");
  const newData = prevData + (prevData === "" ? "" : "\n\n") + BUILD_LOG;
  fs.writeFileSync(logPath, newData, "utf8");
}

// -----------------------------------------------------------------------------------------

const FOLDER_NOMENCLATURE = {
  docs: "docs.md",
};

let SearchData: SearchProps = [];

//   This function will help us find the target directory and package directory. It will return an object with the two directories. It will check all the necessary conditions and exit the process if any of them are not met.
function DirPathFinder() {
  const currentDirectory = process.cwd();
  const verifyOnlyOneRegistry = currentDirectory
    .split(path.sep)
    .filter((dir) => dir === "registry").length;
  if (verifyOnlyOneRegistry !== 1) {
    log({
      state: "error",
      message: `There should only be one registry folder in the path. It seems there are more than one in the path ${currentDirectory}. Please move this entire code folder to a place where there is no registry folder except the one in the codebase.`,
    });
    process.exit(1);
  }
  const replacedPath = currentDirectory.replace("registry", "web");

  // TARGET DIR - This is where the generated docs will be placed. i.e. web/src/app/docs/(generatedDocs)
  const targetDir = path.join(replacedPath, "src", "data", "generated");

  // PACKAGE DIR - This is where the packages are located. i.e. registry/src/packages
  const packageDir = path.join(process.cwd(), "src", "packages");

  return { targetDir, packageDir };
}

const { targetDir, packageDir } = DirPathFinder();

function extractData(folderPath: string): SearchIndividualProps | null {
  try {
    {
      // E.g. Default Text Input, Animated Text Input, etc (i.e. variants 01,02,03,etc)
      let output: SearchIndividualProps;

      const DocsPath = path.join(folderPath, FOLDER_NOMENCLATURE.docs);

      if (!fs.existsSync(DocsPath)) {
        log({
          state: "error",
          message:
            "No docs.md file found in the path to generate an example component. Either create docs.md file or rename it according to the rules if it exists. We consider the docs.md file as the default file to generate the documentation of the component.",
        });
        addBuildLog(
          "error",
          `No docs.md file found in the path. Skipping the generation`,
          "extractData",
          folderPath
        );
        return null;
      }

      const DocsData = fs.readFileSync(DocsPath, "utf8");

      const frontMatterRegex = /^---\s*([\s\S]*?)\s*---/;
      const match = DocsData.match(frontMatterRegex);

      if (!match) {
        addBuildLog(
          "error",
          `No front matter found. Skipping the generation`,
          "extractData",
          folderPath
        );
        return null;
      }
      const frontMatterContent = match[1];
      const frontMatter: Record<string, string> = {};

      frontMatterContent.split("\n").forEach((line) => {
        const [key, ...value] = line.split(":");
        frontMatter[key.trim()] = value.join(":").trim();
      });

      if (!frontMatter?.name) {
        addBuildLog(
          "error",
          `Name not found in the front matter. Skipping the generation`,
          "extractData",
          folderPath
        );
      }
      if (!frontMatter?.description) {
        addBuildLog(
          "error",
          `Description not found in the front matter. Skipping the generation`,
          "extractData",
          folderPath
        );
      }
      if (!frontMatter?.version_included) {
        addBuildLog(
          "error",
          `Version not found in the front matter. Skipping the generation`,
          "extractData",
          folderPath
        );
      }

      const name = frontMatter?.name || "Name Not Found";
      const description = frontMatter?.description || "Description Not Found";
      const flag = (frontMatter?.flag || "default") as
        | "hidden"
        | "default"
        | "experimental"
        | "deprecated"
        | "beta";

      if (flag === "hidden") {
        addBuildLog(
          "default",
          `Flag - hidden added . Skipping it`,
          "extractData",
          folderPath
        );
        return null;
      }
      const relativePath = getPathWithReferenceFromPackages(
        folderPath
      ).replaceAll(path.sep, "/");
      const pathArr: string[] = relativePath.split("/");
      const reqPath = pathArr.slice(0, pathArr.length - 1);
      const hashAddition = stringToDashedString(name);
      const link = "docs/" + reqPath?.join("/") + "#" + hashAddition;

      const version_included = frontMatter?.version_included || "0.0.0";
      const tags =
        frontMatter?.tags
          .replace("[", "")
          .replace("]", "")
          .replaceAll('"', "")
          .split(",") || [];

      const category = pathArr[0];
      const group = pathArr[1];

      output = {
        name,
        description,
        tags,
        link,
        version_included,
        flag,
        category,
        group,
      };
      addBuildLog(
        "success",
        `Item extracted - ${name}`,
        "extractData",
        folderPath
      );

      return output;
    }
  } catch (error) {
    log({
      state: "error",
      message: `SEARCH / Error generating the search for ${folderPath}. Error - ${error}`,
    });
    addBuildLog(
      "error",
      `Error generating the search. Error - ${error}`,
      "extractData",
      folderPath
    );
    throw error;
  }
}

function generateSearchSubHeadings(folderPath: string) {
  try {
    // E.g. Default Text Input, Animated Text Input, etc (i.e. variants 01,02,03,etc)
    const folders = getFoldersInDir(folderPath);

    folders?.forEach((folder) => {
      const subFolderPath = path.join(folderPath, folder);
      let children: SearchIndividualProps | null = extractData(subFolderPath);

      if (!children) {
        addBuildLog(
          "default",
          `children not extracted`,
          "generateSearchSubHeadings",
          folderPath
        );
        return;
      }
      addBuildLog(
        "success",
        `Children Added - ${folder}`,
        "generateSearchSubHeadings",
        folderPath
      );
      SearchData.push(children);
    });
  } catch (error) {
    log({
      state: "error",
      message: `SEARCH / Error generating the search for ${folderPath}. Error - ${error}`,
    });
    addBuildLog(
      "error",
      `Error generating the search. Error - ${error}`,
      "generateSearchSubHeadings",
      folderPath
    );
    throw error;
  }
}

function generateSearchHeadings(folderPath: string) {
  try {
    // E.g. input-text, input-number, etc
    const folders = getFoldersInDir(folderPath);

    folders?.forEach((folder) => {
      const subFolderPath = path.join(folderPath, folder);

      generateSearchSubHeadings(subFolderPath);
    });
  } catch (error) {
    log({
      state: "error",
      message: `SEARCH / Error generating the search for ${folderPath}. Error - ${error}`,
    });
    addBuildLog(
      "error",
      `Error generating the search. Error - ${error}`,
      "generateSearchHeadings",
      folderPath
    );
    throw error;
  }
}

export function generateSearch() {
  log({
    state: "success",
    message: "SEARCH / Generating...",
  });
  addBuildLog("event", "Generating the search", "generateSearch");
  const level_1_folders_array = getFoldersInDir(packageDir);
  level_1_folders_array?.forEach((folder) => {
    const folderPath = path.join(packageDir, folder);
    generateSearchHeadings(folderPath);
  });

  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir);

  const SearchPath = path.join(targetDir, "generated-search.ts");

  const writeData =
    'import {SearchProps} from "@/data/Search"' +
    "\n\n" +
    "const Search: SearchProps = " +
    JSON.stringify(SearchData, null, 2) +
    "\nexport default Search";
  fs.writeFileSync(SearchPath, writeData, "utf8");
  log({
    state: "success",
    message: "SEARCH / Generated successfully!",
  });
  log({
    state: "success",
    message:
      "SEARCH / View the generated data " + terminalLink("here", SearchPath),
  });
  addBuildLog("event", "Generated the search", "generateSearch");
  publishBuildLog();
}

generateSearch();
