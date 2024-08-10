import {
  capitalize,
  createDirectory,
  DirPathFinder,
  getFilesInDir,
  getFoldersInDir,
  getPathWithReferenceFromPackages,
  log,
  sanitizeFilePath,
  terminalLink,
} from "@/scripts/helperFunctions";
import { TECH_USED, TECH_USED_PROPS } from "@/utils/technologiesUsed";
import fs from "fs";
import path from "path";

// Directories
const { targetDir, packageDir } = DirPathFinder();
// The category having resizable display element
const categoryHavingResizableDisplayElement = ["components"];
export const FOLDER_NOMENCLATURE = {
  docs: "docs.md",
  example: "example.tsx",
  default_example_folder: "default-ts",
  docsAdditionalFolders: ["docs-react_aria.md", "docs-default.md"],
};

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
  const dashedPartition =
    "--------------------------------------------------------------";
  const dirPath = path.join(process.cwd(), ".stratik-ui");
  const logPath = path.join(process.cwd(), ".stratik-ui", "log.txt");

  createDirectory(dirPath);

  // check if the log file exists
  if (!fs.existsSync(logPath)) {
    fs.writeFileSync(logPath, "", "utf8");
  }
  const prevData = fs.readFileSync(logPath, "utf8");
  const newData =
    prevData +
    (prevData === "" ? "" : "\n\n\n") +
    dashedPartition +
    "\nGENERATING THE DOCS\n" +
    dashedPartition +
    "\n\n\n" +
    BUILD_LOG;
  fs.writeFileSync(logPath, newData, "utf8");
}

function CodeBlockGenerator(folderPath: string) {
  try {
    let codeBlock = "";

    //   get folders
    const folders = getFoldersInDir(folderPath);
    folders?.forEach((folder) => {
      // Eg: default-ts, default-js, etc
      const subFolderPath = path.join(folderPath, folder);
      const folderName = path.basename(subFolderPath).split("-")[0];
      const folderType = path.basename(subFolderPath).split("-")[1];

      // Eg: example.tsx, input.tsx, etc
      const files = getFilesInDir(subFolderPath);
      files?.forEach((file) => {
        const filePath = path.join(subFolderPath, file);
        const fileExtension = path.extname(filePath);
        const fileName = path.basename(filePath).split(fileExtension)[0];
        let fileData = fs.readFileSync(filePath, "utf8");

        // Flags Reading
        // 1. Skip File
        // !skip-generation: true
        const SKIP_GENERATION_REGEX = /\/\/\s*!skip-generation:\s*(true|false)/;
        const skipGenerationMatch = fileData.match(SKIP_GENERATION_REGEX);

        // If the file has the skip-generation flag, we will skip it
        if (skipGenerationMatch && skipGenerationMatch[1] === "true") {
          addBuildLog(
            "default",
            `!skip-generation: true flag in file. Skipped the file generation`,
            "CodeBlockGenerator",
            folderPath
          );
          return;
        }

        // 2. Code Highlighting
        // !code-highlight: [1,2,5-6,10]
        const CODE_HIGHLIGHT_REGEX =
          /\/\/\s*!code-highlight:\s*\[([0-9,\-\s]*)\]/;
        const codeHighlightMatch = fileData.match(CODE_HIGHLIGHT_REGEX);

        if (codeHighlightMatch) {
          addBuildLog(
            "default",
            `!code-highlight flag in file. Skipped the file generation`,
            "CodeBlockGenerator",
            folderPath
          );
          const highlightOutput = codeHighlightMatch[1]
            .split(",")
            .map((item) => item.trim());
          const lines = fileData.split(/\r?\n/);

          highlightOutput.forEach((lineNumberStr) => {
            const lineNumberPreprocess = lineNumberStr.split("-");
            if (lineNumberPreprocess.length === 0) return;
            else if (lineNumberPreprocess.length === 1) {
              const lineNumber = parseInt(lineNumberStr);
              if (lines[lineNumber - 1]) {
                if (lines[lineNumber - 1].includes("// [!code highlight]"))
                  return;
                lines[lineNumber - 1] =
                  lines[lineNumber - 1] + " // [!code highlight]";
              }
            } else if (lineNumberPreprocess.length === 2) {
              const lineNumberStart = parseInt(lineNumberPreprocess[0]);
              const lineNumberEnd = parseInt(lineNumberPreprocess[1]);

              for (let i = lineNumberStart; i <= lineNumberEnd; i++) {
                if (
                  lines.length > i - 1 &&
                  !lines[i - 1].includes(" // [!code highlight]")
                ) {
                  lines[i - 1] = lines[i - 1] + " // [!code highlight]";
                }
              }
            }
          });

          fileData = lines.join("\n");
        }

        // 3. Skip Lines
        // !skip-lines: [12,17-20]

        const SKIP_LINES_REGEX = /\/\/\s*!skip-lines:\s*\[([0-9,\-\s]*)\]/;
        const skipLinesMatch = fileData.match(SKIP_LINES_REGEX);

        if (skipLinesMatch) {
          addBuildLog(
            "default",
            `!skip-lines flag in file. Skipped the file generation`,
            "CodeBlockGenerator",
            folderPath
          );
          const highlightOutput = skipLinesMatch[1]
            .split(",")
            .map((item) => item.trim());
          const lines = fileData.split(/\r?\n/);

          highlightOutput.forEach((lineNumberStr) => {
            const lineNumberPreprocess = lineNumberStr.split("-");
            if (lineNumberPreprocess.length === 0) return;
            else if (lineNumberPreprocess.length === 1) {
              const lineNumber = parseInt(lineNumberStr);
              if (lines[lineNumber - 1]) {
                if (lines[lineNumber - 1].includes("// [!skip lines]")) return;
                lines[lineNumber - 1] =
                  lines[lineNumber - 1] + " // [!skip lines]";
              }
            } else if (lineNumberPreprocess.length === 2) {
              const lineNumberStart = parseInt(lineNumberPreprocess[0]);
              const lineNumberEnd = parseInt(lineNumberPreprocess[1]);

              for (let i = lineNumberStart; i <= lineNumberEnd; i++) {
                if (
                  lines.length > i - 1 &&
                  !lines[i - 1].includes(" // [!skip lines]")
                ) {
                  lines[i - 1] = lines[i - 1] + " // [!skip lines]";
                }
              }
            }
          });

          fileData = lines
            .filter((line) => {
              return !line.includes("// [!skip lines]");
            })
            .join("\n");
        }

        // 4. Remove the Flag Comments
        fileData = fileData.replace(
          /\/\/\s*!skip-generation:\s*(true|false)\n/g,
          ""
        );
        fileData = fileData.replace(
          /\/\/\s*!code-highlight:\s*\[([0-9,\-\s]*)\]\n/g,
          ""
        );
        fileData = fileData.replace(
          /\/\/\s*!skip-lines:\s*\[([0-9,\-\s]*)\]\n/g,
          ""
        );
        const name =
          folderName +
          "|" +
          folderType +
          "|" +
          fileName +
          "." +
          fileExtension.split(".")[1];
        // Returning the code of that file
        const returnCode = "```" + name + "\n" + fileData + "\n```";
        codeBlock += "\n" + returnCode + "\n";
      });
    });

    codeBlock = "\n<CodeBlock>\n" + codeBlock + "\n</CodeBlock>\n";
    return codeBlock;
  } catch (err) {
    const refPath =
      "@/packages/" + getPathWithReferenceFromPackages(folderPath);
    log({
      state: "error",
      message:
        "Error while generating the code block for the component: " +
        refPath +
        "\nERROR: " +
        err,
    });
    addBuildLog(
      "error",
      `Error while generating the code block for the component. Error: ${err}`,
      "CodeBlockGenerator",
      folderPath
    );
    return "";
  }
}

// TODO: Test for other example folders like react_aria, etc.
function addDisplayElement(folderPath: string) {
  try {
    {
      // 1. We need to locate default-ts or -ts folder
      const folders = getFoldersInDir(folderPath);

      var exists: string[] = [];
      folders?.forEach((folder) => {
        if (folder.includes("-ts")) {
          exists.push(folder);
        }
      });

      var exampleFolder: string = "";

      if (exists.length === 0) {
        log({
          state: "error",
          message:
            "No ts folder found in the path to generate an example component. Either create ts variant or rename it according to the rules if it exists. We consider the ts folder as the default folder to generate the example component.",
        });
        addBuildLog(
          "error",
          `No ts folder found in the path. This is the default folder to generate the example component. Eg. default-ts, react_aria-ts, etc. Check the contributing guide for more details.`,
          "addDisplayElement",
          folderPath
        );

        return;
      } else if (exists.includes(FOLDER_NOMENCLATURE.default_example_folder)) {
        const folderName = exists.find((item) =>
          item.includes(FOLDER_NOMENCLATURE.default_example_folder)
        );
        if (!folderName) {
          addBuildLog(
            "error",
            `No folder found in the path. This is the default folder to generate the example component. Eg. default-ts, react_aria-ts, etc. Check the contributing guide for more details.`,
            "addDisplayElement",
            folderPath
          );
          return;
        }
        exampleFolder = path.join(folderPath, folderName);
        addBuildLog(
          "default",
          `Found the default folder`,
          "addDisplayElement",
          exampleFolder
        );
      } else {
        const folderName = exists.find((item) => item.includes("-ts"));
        if (!folderName) {
          addBuildLog(
            "error",
            `No folder found in the path. This is the default folder to generate the example component. Eg. default-ts, react_aria-ts, etc. Check the contributing guide for more details.`,
            "addDisplayElement",
            folderPath
          );
          return;
        }
        exampleFolder = path.join(folderPath, folderName);
        addBuildLog(
          "default",
          `Found the default folder`,
          "addDisplayElement",
          exampleFolder
        );
      }

      // 2. Name the component appropriately and its imports - uniquely
      const endingPath = folderPath.split(
        path.sep +
          "apps" +
          path.sep +
          "registry" +
          path.sep +
          "src" +
          path.sep +
          "packages" +
          path.sep
      )[1];
      const sanitizedName = capitalize(sanitizeFilePath(endingPath));

      // 3. Wrap the Component call i.e. <Example /> in display
      const componentCall = `<${sanitizedName} />`;

      const category = endingPath.split(path.sep)[0];
      const isResizable =
        categoryHavingResizableDisplayElement.includes(category);
      const displayElement = isResizable
        ? `<ResizableDisplay>\n${componentCall}\n</ResizableDisplay>`
        : `<Display>\n${componentCall}\n</Display>`;
      // 4. Wrap the component in a Suspense

      let SkeletonClassName = "";
      if (category === "components") SkeletonClassName = "h-[800px] rounded-lg";
      else if (category === "primitives") SkeletonClassName = "h-60 rounded-lg";
      else SkeletonClassName = "h-60 rounded-lg";

      const registryPath = exampleFolder
        .split(
          path.sep +
            "apps" +
            path.sep +
            "registry" +
            path.sep +
            "src" +
            path.sep +
            "packages" +
            path.sep
        )[1]
        .replaceAll(path.sep, "/");

      const displayData = `\n<Suspense fallback={<Skeleton className="${SkeletonClassName}" />}>\n${displayElement}\n</Suspense>\n`;

      const importData = `\nexport const ${sanitizedName} = lazy(() => import("@/packages/${registryPath}/${FOLDER_NOMENCLATURE.example}"));\n`;

      return { importData, displayData };
    }
  } catch (err) {
    const refPath =
      "@/packages/" + getPathWithReferenceFromPackages(folderPath);
    log({
      state: "error",
      message:
        "Error while generating the display element for the component: " +
        refPath +
        "\nERROR: " +
        err,
    });
    addBuildLog(
      "error",
      `Error while generating the display element for the component. Error: ${err}`,
      "addDisplayElement",
      folderPath
    );
  }
}

function otherDataProcessing(folderPath: string, defaultData: string): string {
  try {
    const files = getFilesInDir(folderPath);
    let data = "";

    files?.forEach((file) => {
      if (file === "docs.md") return;

      const isPresent =
        FOLDER_NOMENCLATURE.docsAdditionalFolders.includes(file);

      if (!isPresent) return;

      const filePath = path.join(folderPath, file);
      const fileData = fs.readFileSync(filePath, "utf8");

      const provider = file.split("docs-")[1].split(".md")[0];

      data += `<Provider tag="${provider}">\n${fileData}\n</Provider>\n`;
    });

    data = "<Details>\n" + defaultData + data + "\n</Details>";
    return data;
  } catch (err) {
    log({
      state: "error",
      message:
        "Error while generating the documentation for the component - docs.md: " +
        folderPath +
        "\nERROR: " +
        err,
    });
    addBuildLog(
      "error",
      `Error while generating the documentation for the component - docs.md: Error: ${err}`,
      "otherDataProcessing",
      folderPath
    );
    return "";
  }
}

function addDocumentationData(folderPath: string) {
  try {
    {
      // Locate docs.md
      const docsFilePath = path.join(folderPath, FOLDER_NOMENCLATURE.docs);
      const docsFileData = fs.readFileSync(docsFilePath, "utf8");
      if (!docsFileData) {
        log({
          state: "error",
          message:
            "No docs.md file found in the path to generate an example component. Either create docs.md file or rename it according to the rules if it exists. We consider the docs.md file as the default file to generate the documentation of the component.",
        });
        addBuildLog(
          "error",
          `No docs.md file found in the path. Skipping the generation`,
          "addDocumentationData",
          folderPath
        );
        return;
      }

      addBuildLog(
        "default",
        `docs.md file found in the path`,
        "addDocumentationData",
        folderPath
      );

      // Read frontmatter
      const frontMatterRegex = /^---\s*([\s\S]*?)\s*---/;
      const match = docsFileData.match(frontMatterRegex);

      if (!match) return null;

      const frontMatterContent = match[1];
      const frontMatter: Record<string, string> = {};

      frontMatterContent.split("\n").forEach((line) => {
        const [key, ...value] = line.split(":");
        frontMatter[key.trim()] = value.join(":").trim();
      });

      // 2. Read the description , name , version_included and tags

      // a. name
      if (!frontMatter.name) {
        log({
          state: "warning",
          message:
            'No name found in the docs.md file. So we will write "name" at its place. Please add a name to the docs.md file so that it can be used in the documentation.',
        });
        addBuildLog(
          "error",
          `No name found in the docs.md file. So we will write "name" at its place. Please add a name to the docs.md file so that it can be used in the documentation.`,
          "addDocumentationData",
          folderPath
        );
        frontMatter.name = "Name Not Found";
      }

      // b. description
      if (!frontMatter.description) {
        log({
          state: "warning",
          message:
            'No description found in the docs.md file. So we will write "description" at its place. Please add a description to the docs.md file so that it can be used in the documentation.',
        });
        addBuildLog(
          "error",
          `No description found in the docs.md file. So we will write "description" at its place. Please add a description to the docs.md file so that it can be used in the documentation.`,
          "addDocumentationData",
          folderPath
        );
        frontMatter.description = "Description Not Found";
      }

      // c. version_included
      if (!frontMatter.version_included) {
        log({
          state: "warning",
          message:
            'No version_included found in the docs.md file. So we will write "version_included" at its place. Please add a version_included to the docs.md file so that it can be used in the documentation.',
        });
        addBuildLog(
          "error",
          `No version_included found in the docs.md file. So we will write "version_included" at its place. Please add a version_included to the docs.md file so that it can be used in the documentation.`,
          "addDocumentationData",
          folderPath
        );
        frontMatter.version_included = "0.0.0";
      }

      // 3. Add other information

      const frontmatterMatchedData = match[0];
      const otherData = docsFileData.replace(frontmatterMatchedData, "");

      const finalOtherData = otherDataProcessing(folderPath, otherData);

      const returnData = {
        frontMatter,
        otherData: finalOtherData,
      };

      return returnData;
    }
  } catch (err) {
    const refPath =
      "@/packages/" + getPathWithReferenceFromPackages(folderPath);
    log({
      state: "error",
      message:
        "Error while generating the documentation for the component - docs.md: " +
        refPath +
        "\nERROR: " +
        err,
    });
    addBuildLog(
      "error",
      `Error while generating the documentation for the component - docs.md: Error: ${err}`,
      "addDocumentationData",
      folderPath
    );
  }
}

// TODO: Test this function for all the categories
function addTechnologyUsed(codeBlock: string, folderPath: string) {
  try {
    {
      const techAvailable: (keyof TECH_USED_PROPS)[] = Object.keys(
        TECH_USED
      ) as (keyof TECH_USED_PROPS)[];

      let techUsed: (keyof TECH_USED_PROPS)[] = [];
      const importRegex =
        /import\s+[\s\S]+?\s+from\s+['"][^'"]+['"];?|import\s+['"][^'"]+['"];?/g;

      const importsMade = codeBlock.match(importRegex);

      techAvailable.forEach((tech) => {
        importsMade?.forEach((importItem) => {
          if (importItem.includes(tech) && !techUsed.includes(tech)) {
            techUsed.push(tech);
            return;
          }
        });
      });

      let techUsedString = "<TechnologiesUsed>\n";
      techUsed?.forEach((tech) => {
        const logo = TECH_USED[tech].logo;
        techUsedString += `<Tech name="${tech}" />\n`;
      });

      techUsedString += "</TechnologiesUsed>";

      return techUsedString;
    }
  } catch (err) {
    const refPath =
      "@/packages/" + getPathWithReferenceFromPackages(folderPath);
    log({
      state: "error",
      message:
        "Error while generating the tech used for the component: " +
        refPath +
        "\nERROR: " +
        err,
    });
    addBuildLog(
      "error",
      `Error while generating the tech used for the component Error: ${err}`,
      "addTechnologyUsed",
      folderPath
    );
  }
}

function generateIndividualDocument(folderPath: string) {
  try {
    {
      let individualDocument = "";

      const codeBlock = CodeBlockGenerator(folderPath);
      if (!codeBlock)
        addBuildLog(
          "default",
          `No code block found in the path`,
          "generateIndividualDocument",
          folderPath
        );

      const value = addDisplayElement(folderPath);
      if (!value)
        addBuildLog(
          "default",
          `No display element found in the path.`,
          "generateIndividualDocument",
          folderPath
        );

      const importData = value?.importData;
      const displayData = value?.displayData;
      if (!displayData)
        addBuildLog(
          "default",
          `No display generated in the path.`,
          "generateIndividualDocument",
          folderPath
        );

      const docs = addDocumentationData(folderPath);
      const frontMatter = docs?.frontMatter;
      const otherData = docs?.otherData || "";
      const techUsed = addTechnologyUsed(codeBlock, folderPath);
      if (!techUsed)
        addBuildLog(
          "default",
          `No tech used found in the path.`,
          "generateIndividualDocument",
          folderPath
        );

      const flag = frontMatter?.flag || "";
      if (!flag)
        addBuildLog(
          "default",
          `No flag found in the path.`,
          "generateIndividualDocument",
          folderPath
        );

      let flagData = "";

      if (flag !== "") {
        if (flag === "hidden") {
          addBuildLog(
            "default",
            `Flag-hidden found in the path. Skipping the generation.`,
            "generateIndividualDocument",
            folderPath
          );
          return "";
        } else if (flag === "experimental") {
          flagData = "\n<ExperimentalWarning />\n";
          addBuildLog(
            "default",
            `Flag-experimental found in the path.`,
            "generateIndividualDocument",
            folderPath
          );
        } else if (flag === "deprecated") {
          flagData = "\n<DeprecatedWarning />\n";
          addBuildLog(
            "default",
            `Flag-deprecated found in the path.`,
            "generateIndividualDocument",
            folderPath
          );
        } else if (flag === "beta") {
          flagData = "\n<BetaWarning />\n";
          addBuildLog(
            "default",
            `Flag-beta found in the path.`,
            "generateIndividualDocument",
            folderPath
          );
        }
      }

      const shortPath = folderPath.split(
        "registry" + path.sep + "src" + path.sep + "packages" + path.sep
      )[1];
      const sanitizedShortPath = shortPath.replaceAll(path.sep, "/");
      const category = shortPath.split(path.sep)[0];

      const generatedMessage = `\n{/*\n// ------------------------------------------------------------------------------------
    //	The text below is generated from "@/registry/${sanitizedShortPath}"\n//------------------------------------------------------------------------------------\n*/}\n`;

      if (category === "hooks") {
        individualDocument = generatedMessage;
        const name = frontMatter?.name || "Name Not Found";
        const description = frontMatter?.description || "Description Not Found";

        individualDocument +=
          "\n" +
          "<Wrapper>\n" +
          flagData +
          `<Title>${name}</Title>\n` +
          `### ${description}\n` +
          codeBlock +
          otherData +
          importData +
          displayData +
          "\n</Wrapper>\n";
      } else if (category === "components") {
        individualDocument = generatedMessage;
        const name = frontMatter?.name || "Name Not Found";
        const description = frontMatter?.description || "Description Not Found";
        const preview = `<Preview>\n${importData}\n${displayData}\n</Preview>`;

        individualDocument +=
          "\n" +
          "<Wrapper>\n" +
          flagData +
          `<Title>${name}</Title>\n` +
          `### ${description}\n` +
          "<Header />" +
          preview +
          "<Implementation>\n" +
          techUsed +
          codeBlock +
          otherData +
          "\n</Implementation>\n</Wrapper>\n";
      } else if (category === "primitives") {
        individualDocument = generatedMessage;
        const name = frontMatter?.name || "Name Not Found";
        const description = frontMatter?.description || "Description Not Found";
        const preview = `<Preview>\n${importData}\n${displayData}\n</Preview>`;

        individualDocument +=
          "\n" +
          "<Wrapper>\n" +
          flagData +
          `<Title>${name}</Title>\n` +
          `### ${description}\n` +
          "<Header />" +
          preview +
          "<Implementation>\n" +
          techUsed +
          codeBlock +
          otherData +
          "\n</Implementation>\n</Wrapper>\n";
      }

      return individualDocument;
    }
  } catch (err) {
    const refPath =
      "@/packages/" + getPathWithReferenceFromPackages(folderPath);
    log({
      state: "error",
      message:
        "Error while generating the individual document for the component: " +
        refPath +
        "\nERROR: " +
        err,
    });
    addBuildLog(
      "error",
      `Error while generating the individual document for the component. Error: ${err}`,
      "generateIndividualDocument",
      folderPath
    );
  }
}

function generateDocs() {
  try {
    {
      // get all the folders in the package directory - category - hooks, components, and primitives folders
      const level_1_folders_array = getFoldersInDir(packageDir);

      level_1_folders_array?.forEach((folder) => {
        // get and create the folders
        const folder_level_1 = path.join(packageDir, folder);
        const target_folder_level_1 = path.join(targetDir, folder);
        createDirectory(target_folder_level_1);
        addBuildLog(
          "default",
          `Created the folder. ${folder}`,
          "generateDocs",
          target_folder_level_1
        );

        // get all the folders in the category - group - input-text, input-number, etc
        const level_2_folders_array = getFoldersInDir(folder_level_1);
        if (!level_2_folders_array)
          addBuildLog(
            "default",
            `No folders found in the path.`,
            "generateDocs",
            folder_level_1
          );
        level_2_folders_array?.forEach((subFolder) => {
          const folder_level_2 = path.join(folder_level_1, subFolder);
          const target_folder_level_2 = path.join(
            target_folder_level_1,
            subFolder
          );
          createDirectory(target_folder_level_2);
          addBuildLog(
            "default",
            `Created the folder. ${subFolder}`,
            "generateDocs",
            target_folder_level_2
          );

          // We have created the folders and subfolders. Now we need to create the files

          let megaDocument = "";

          // Here we will execute the logic for each variant - 01, 02, 03, etc
          const individualComponentFolders = getFoldersInDir(folder_level_2);
          if (!individualComponentFolders)
            addBuildLog(
              "default",
              `No folders found in the path.`,
              "generateDocs",
              folder_level_2
            );

          individualComponentFolders?.forEach((componentFolder) => {
            addBuildLog(
              "default",
              `Generating the individual document for the path.`,
              "generateDocs",
              folder_level_2 + componentFolder
            );
            const individualFolderPath = path.join(
              folder_level_2,
              componentFolder
            );
            const individualDocument =
              generateIndividualDocument(individualFolderPath);
            if (!individualDocument)
              addBuildLog(
                "default",
                `No document generated in the path.`,
                "generateDocs",
                individualFolderPath
              );
            megaDocument += individualDocument;
            addBuildLog(
              "default",
              `Generated the individual document for the path. ${componentFolder}`,
              "generateDocs",
              folder_level_2 + componentFolder
            );
          });

          const INITIAL_STRING = {
            PRIMITIVES: `import React, { Suspense } from 'react';\nimport { Implementation, Preview, Header, Display, TechnologyUsed, Wrapper, Skeleton, PARTITION } from "@/components/mdx/MDXServerImports"\nimport { CodeBlock } from "@/components/mdx/MDXClientImports"\n`,

            COMPONENTS: `import React, { Suspense } from 'react';\nimport { Implementation, Preview, Header, TechnologyUsed, Wrapper, Skeleton, PARTITION } from "@/components/mdx/MDXServerImports"\nimport { CodeBlock, ResizableDisplay } from "@/components/mdx/MDXClientImports"\n`,

            HOOKS: `import React, { Suspense } from 'react';\nimport { Display, TechnologyUsed, Wrapper, Skeleton } from "@/components/mdx/MDXServerImports"\nimport { CodeBlock } from "@/components/mdx/MDXClientImports"\n`,

            GENERIC: `import React, { Suspense } from 'react';\nimport { Implementation, Preview, Header, Display, TechnologyUsed, Wrapper, Skeleton, PARTITION } from "@/components/mdx/MDXServerImports"\nimport { CodeBlock, ResizableDisplay } from "@/components/mdx/MDXClientImports"\n`,
          };

          let finalDocument = "";

          if (folder === "primitives") {
            finalDocument = INITIAL_STRING.PRIMITIVES;
          } else if (folder === "components") {
            finalDocument = INITIAL_STRING.COMPONENTS;
          } else if (folder === "hooks") {
            finalDocument = INITIAL_STRING.HOOKS;
          } else {
            return null;
          }

          // Check if the megaDocument is empty - due to flag hidden or not generation of the document
          const checkIfEmpty = megaDocument.replace(/\s/g, "");
          if (checkIfEmpty === "") {
            finalDocument = "";
            addBuildLog(
              "default",
              `File Empty.`,
              "generateDocs",
              target_folder_level_2
            );
          } else {
            finalDocument += megaDocument;
          }

          // write the document (megaDocument) to the target folder
          const target_document_file = path.join(
            target_folder_level_2,
            "page.mdx"
          );
          fs.writeFileSync(target_document_file, finalDocument, "utf8");
          addBuildLog(
            "default",
            `File Written.`,
            "generateDocs",
            target_document_file
          );
        });
      });
    }
  } catch (err) {
    log({
      state: "error",
      message:
        "Error while generating the docs for the component: " +
        "\nERROR: " +
        err,
    });
    addBuildLog(
      "error",
      `Error while generating the docs for the component - function generateDocs: ${err}`,
      "generateDocs"
    );
  }
}

function cleanup(dirPath: string) {
  try {
    {
      // Run Cleanup - remove all the empty folders & files

      // Read the contents of the directory
      const items = fs.readdirSync(dirPath);

      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const messagePath =
          "@/packages" +
          fullPath.split("src" + path.sep + "(generatedDocs)" + path.sep)[0];
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          // Recursively process subdirectories
          cleanup(fullPath);

          // After processing subdirectory, check if it's empty
          if (fs.readdirSync(fullPath).length === 0) {
            fs.rmSync(fullPath, { recursive: true, force: true });
            log({
              state: "warning",
              message: `Deleted empty directory: ${messagePath}`,
            });
            addBuildLog(
              "warning",
              `Deleted empty directory ${messagePath}`,
              "cleanup",
              messagePath
            );
          }
        } else if (stat.isFile()) {
          // Check if file is empty
          if (stat.size === 0) {
            fs.unlinkSync(fullPath);
            log({
              state: "warning",
              message: `Deleted empty directory: ${messagePath}`,
            });
            addBuildLog(
              "warning",
              `Deleted empty directory ${messagePath}`,
              "cleanup",
              messagePath
            );
          }
        }
      }
    }
  } catch (err) {
    const refPath = "@/packages/" + getPathWithReferenceFromPackages(dirPath);
    log({
      state: "error",
      message:
        "Error while generating the docs for the component - function cleanup: " +
        refPath +
        "\nERROR: " +
        err,
    });
    addBuildLog(
      "error",
      `Error while generating the docs for the component - function cleanup . Error: ${err}`,
      "cleanup",
      dirPath
    );
  }
}

function main() {
  // generate the docs
  log({ state: "success", message: "DOCS / Generating the docs" });
  addBuildLog("event", "Generating the docs", "main");
  generateDocs();

  // Run Cleanup - remove all the empty folders & files
  log({ state: "success", message: "DOCS / Cleaning up the generated docs" });
  addBuildLog("event", "Cleaning up the generated docs", "main");
  cleanup(targetDir);
  log({ state: "success", message: "DOCS / Cleaned up the generated docs" });
  log({
    state: "success",
    message: "DOCS / Generated successfully!",
  });
  log({
    state: "success",
    message:
      "DOCS / View the generated data " + terminalLink("here", targetDir),
  });
  addBuildLog("event", "Docs Generated", "main");
  publishBuildLog();
}

main();
