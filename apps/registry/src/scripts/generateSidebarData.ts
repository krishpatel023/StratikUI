import fs from "node:fs";
import path from "node:path";
import {
  compareVersions,
  createDirectory,
  getFoldersInDir,
  getPathWithReferenceFromPackages,
  log,
  stringToDashedString,
  terminalLink,
} from "./helperFunctions";
import type { Sidebar_HeadingProps, Sidebar_SubHeadingProps, SidebarProps } from "@web/data/Sidebar";

const FOLDER_NOMENCLATURE = {
  docs: "docs.md",
};

// This function will help to generate the log.tsx file in .stratik-ui folder of registry
// It will be used to generate the log file for the docs which will help us to debug the code well

let BUILD_LOG = "";

function addBuildLog(
  state: "default" | "error" | "success" | "warning" | "event",
  message: string,
  functionCalled?: string,
  folderPath?: string,
) {
  const folderPathData = folderPath ? `\n${folderPath}\n` : "\n";
  const functionCalledData = functionCalled ? `\nfunction - ${functionCalled}` : "";
  BUILD_LOG += "\n";
  switch (state) {
    case "default":
      BUILD_LOG += `📄 ${message}${functionCalledData}${folderPathData}`;
      break;
    case "error":
      BUILD_LOG += `❌ ${message}${functionCalledData}${folderPathData}`;
      break;
    case "success":
      BUILD_LOG += `✅ ${message}${functionCalledData}${folderPathData}`;
      break;
    case "warning":
      BUILD_LOG += `⚠️ ${message}${functionCalledData}${folderPathData}`;
      break;
    case "event": {
      const date = new Date();
      BUILD_LOG += `📢 [${date.toLocaleString()}] ${message}${functionCalledData}${folderPathData}`;
      break;
    }
    default:
      BUILD_LOG += `📄 ${message}${functionCalledData}${folderPathData}`;
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

//

let sidebar: SidebarProps = [];

//   This function will help us find the target directory and package directory. It will return an object with the two directories. It will check all the necessary conditions and exit the process if any of them are not met.
function DirPathFinder() {
  const currentDirectory = process.cwd();
  const verifyOnlyOneRegistry = currentDirectory.split(path.sep).filter((dir) => dir === "registry").length;
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

function extractSubHeadingData(folderPath: string): Sidebar_SubHeadingProps | null {
  try {
    // E.g. Default Text Input, Animated Text Input, etc (i.e. variants 01,02,03,etc)
    const DocsPath = path.join(folderPath, FOLDER_NOMENCLATURE.docs);

    if (!fs.existsSync(DocsPath)) {
      log({
        state: "error",
        message:
          "No docs.md file found in the path to generate an example component. Either create docs.md file or rename it according to the rules if it exists. We consider the docs.md file as the default file to generate the documentation of the component.",
      });
      addBuildLog(
        "error",
        "No docs.md file found in the path. Skipping the generation",
        "extractSubHeadingData",
        folderPath,
      );
      return null;
    }

    const DocsData = fs.readFileSync(DocsPath, "utf8");

    const frontMatterRegex = /^---\s*([\s\S]*?)\s*---/;
    const match = DocsData.match(frontMatterRegex);

    if (!match) {
      addBuildLog("error", "No front matter found. Skipping the generation", "extractSubHeadingData", folderPath);
      return null;
    }

    const frontMatterContent = match[1];
    const frontMatter: Record<string, string> = {};

    for (const line of frontMatterContent.split("\n")) {
      const [key, ...value] = line.split(":");
      frontMatter[key.trim()] = value.join(":").trim();
    }

    if (!frontMatter?.name) {
      addBuildLog(
        "error",
        "Name not found in the front matter. Skipping the generation",
        "extractSubHeadingData",
        folderPath,
      );
    }
    if (!frontMatter?.description) {
      addBuildLog(
        "error",
        "Description not found in the front matter. Skipping the generation",
        "extractSubHeadingData",
        folderPath,
      );
    }
    if (!frontMatter?.version_included) {
      addBuildLog(
        "error",
        "Version not found in the front matter. Skipping the generation",
        "extractSubHeadingData",
        folderPath,
      );
    }

    const name = frontMatter?.name || "Name Not Found";
    const description = frontMatter?.description || "Description Not Found";
    const flag = (frontMatter?.flag || "default") as "hidden" | "default" | "experimental" | "deprecated" | "beta";

    if (flag === "hidden") {
      addBuildLog("default", "Flag - hidden added . Skipping it", "extractSubHeadingData", folderPath);
      return null;
    }

    const relativePath = getPathWithReferenceFromPackages(folderPath).replaceAll(path.sep, "/");
    const pathArr: string[] = relativePath.split("/");
    const reqPath = pathArr.slice(0, pathArr.length - 1);
    const hashAddition = stringToDashedString(name);
    const link = `docs/${reqPath?.join("/")}#${hashAddition}`;

    const version_included = frontMatter?.version_included || "0.0.0";
    const tags = frontMatter?.tags.replace("[", "").replace("]", "").replaceAll('"', "").split(",") || [];

    const output: Sidebar_SubHeadingProps = {
      type: "sub-heading",
      name,
      description,
      tags,
      link,
      version_included,
      flag,
    };

    addBuildLog("success", `Subheading children extracted - ${name}`, "extractSubHeadingData", folderPath);

    return output;
  } catch (error) {
    log({
      state: "error",
      message: `SIDEBAR / Error generating the sidebar for ${folderPath}. Error - ${error}`,
    });
    addBuildLog("error", `Error generating the sidebar. Error - ${error}`, "extractSubHeadingData", folderPath);
    throw error;
  }
}

function generateSidebarSubHeadings(folderPath: string): Sidebar_SubHeadingProps[] {
  try {
    // E.g. Default Text Input, Animated Text Input, etc (i.e. variants 01,02,03,etc)
    const output: Sidebar_SubHeadingProps[] = [];
    const folders = getFoldersInDir(folderPath);

    if (folders) {
      for (const folder of folders) {
        const subFolderPath = path.join(folderPath, folder);
        const children: Sidebar_SubHeadingProps | null = extractSubHeadingData(subFolderPath);

        if (!children) {
          addBuildLog("default", "Subheading children not extracted", "generateSidebarSubHeadings", folderPath);
          break;
        }
        addBuildLog("success", "Subheading children extracted", "generateSidebarSubHeadings", folderPath);
        output.push(children);
      }
    }

    return output;
  } catch (error) {
    log({
      state: "error",
      message: `SIDEBAR / Error generating the sidebar for ${folderPath}. Error - ${error}`,
    });
    addBuildLog("error", `Error generating the sidebar. Error - ${error}`, "generateSidebarSubHeadings", folderPath);
    throw error;
  }
}

function generateSidebarHeadings(folderPath: string): Sidebar_HeadingProps[] {
  try {
    // E.g. input-text, input-number, etc
    const folders = getFoldersInDir(folderPath);
    const output: Sidebar_HeadingProps[] = [];

    if (folders) {
      for (const folder of folders) {
        const subFolderPath = path.join(folderPath, folder);
        const children: Sidebar_SubHeadingProps[] = generateSidebarSubHeadings(subFolderPath);
        let greatestVersion = "0.0.0";

        const flagCount = {
          hidden: 0,
          experimental: 0,
          deprecated: 0,
          beta: 0,
          default: 0,
        };

        for (const child of children) {
          const isVerGreater = compareVersions(child.version_included, greatestVersion);
          if (isVerGreater) {
            greatestVersion = child.version_included;
          }

          if (child.flag === "hidden") flagCount.hidden++;
          else if (child.flag === "experimental") flagCount.experimental++;
          else if (child.flag === "deprecated") flagCount.deprecated++;
          else if (child.flag === "beta") flagCount.beta++;
          else if (child.flag === "default") flagCount.default++;
        }

        let flag = "default";

        if (flagCount.hidden === children.length) {
          flag = "hidden";
          addBuildLog(
            "default",
            `Flag - hidden added to ${folder}. Skipping it`,
            "generateSidebarHeadings",
            folderPath,
          );
          break;
        }
        if (flagCount.experimental === children.length) flag = "experimental";
        else if (flagCount.deprecated === children.length) flag = "deprecated";
        else if (flagCount.beta === children.length) flag = "beta";

        const relativePath = getPathWithReferenceFromPackages(folderPath).replaceAll(path.sep, "/");

        const link = `docs/${relativePath}/${folder}`;

        const subOutput: Sidebar_HeadingProps = {
          type: "heading",
          name: folder,
          link: link,
          version_included: greatestVersion,
          flag: flag as "hidden" | "experimental" | "deprecated" | "beta" | "default",
          children: children,
        };
        output.push(subOutput);
      }
    }

    addBuildLog("success", "Heading children combined", "generateSidebarHeadings", folderPath);

    return output;
  } catch (error) {
    log({
      state: "error",
      message: `SIDEBAR / Error generating the sidebar for ${folderPath}. Error - ${error}`,
    });
    addBuildLog("error", `Error generating the sidebar. Error - ${error}`, "generateSidebarHeadings", folderPath);
    throw error;
  }
}

export function reArrangeSidebar(sidebar: SidebarProps): SidebarProps {
  const order = ["primitives", "components", "hooks"];
  const returnSidebar: SidebarProps = [];
  let inputSidebar: SidebarProps = sidebar;

  for (const item of order) {
    for (const child of inputSidebar) {
      if (child.name === item) {
        returnSidebar.push(child);
        inputSidebar = inputSidebar.filter((child) => child.name !== item);
      }
    }
  }

  returnSidebar.push(...inputSidebar);

  return returnSidebar;
}

export function generateSidebar() {
  addBuildLog("event", "Generated the sidebar", "generateSidebar");
  log({
    state: "success",
    message: "SIDEBAR / Generating...",
  });
  const level_1_folders_array = getFoldersInDir(packageDir);
  for (const folder of level_1_folders_array ?? []) {
    const folderPath = path.join(packageDir, folder);
    const children: Sidebar_HeadingProps[] = generateSidebarHeadings(folderPath);

    const flagCount = {
      hidden: 0,
      default: 0,
    };

    for (const child of children) {
      if (child.flag === "hidden") flagCount.hidden++;
      else if (child.flag === "default") flagCount.default++;
    }

    let flag = "default";

    if (flagCount.hidden === children.length) {
      flag = "hidden";
      addBuildLog("default", `Flag - hidden added to ${folder}. Skipping it`, "generateSidebar", folderPath);
      return;
    }

    // add the folder to the sidebar
    sidebar.push({
      type: "title",
      name: folder,
      flag: flag as "hidden" | "default",
      children: children,
    });
    addBuildLog("success", `Folder - ${folder} added to the sidebar`, "generateSidebar", folderPath);
  }

  sidebar = reArrangeSidebar(sidebar);

  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir);
  const sideBarPath = path.join(targetDir, "generated-sidebar.ts");

  const writeData = `import type {SidebarProps} from "../Sidebar";\n\nconst sidebar: SidebarProps = ${JSON.stringify(sidebar, null, 2)}\nexport default sidebar`;
  fs.writeFileSync(sideBarPath, writeData, "utf8");
  addBuildLog("event", "Generated the sidebar", "generateSidebar");
  log({
    state: "success",
    message: "SIDEBAR / Generated successfully!",
  });
  log({
    state: "success",
    message: `SIDEBAR / View the generated data ${terminalLink("here", sideBarPath)}`,
  });
  publishBuildLog();
}

generateSidebar();
