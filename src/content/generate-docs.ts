import fs from "fs";
import path from "path";

// Include filepaths here that should not be generated
const DO_NOT_GENERATE: string[] = [];

// Directories
const contentDir = path.join(process.cwd(), "src", "content", "docs");
const targetDir = path.join(
  process.cwd(),
  "src",
  "app",
  "docs",
  "(generatedDocs)"
);

// Initial/Default string
const INITIAL_STRING = {
  PRIMITIVES: `import { Implementation, Preview, Header, Display, TechnologyUsed, Wrapper, Skeleton, PARTITION } from "@/components/mdx/MDXServerImports"\nimport { CodeBlock } from "@/components/mdx/MDXClientImports"\n`,

  COMPONENTS: `import { Implementation, Preview, Header, TechnologyUsed, Wrapper, Skeleton, PARTITION } from "@/components/mdx/MDXServerImports"\nimport { CodeBlock, ResizableDisplay } from "@/components/mdx/MDXClientImports"\n`,

  HOOKS: `import { Display, TechnologyUsed, Wrapper, Skeleton } from "@/components/mdx/MDXServerImports"\nimport { CodeBlock } from "@/components/mdx/MDXClientImports"\n`,

  GENERIC: `import { Implementation, Preview, Header, Display, TechnologyUsed, Wrapper, Skeleton, PARTITION } from "@/components/mdx/MDXServerImports"\nimport { CodeBlock, ResizableDisplay } from "@/components/mdx/MDXClientImports"\n`,
};

// Tags that we need to wrap in suspense
const SUSPENSED_TAGS = ["Display", "ResizableDisplay"];

// Helper functions
function log({
  state = "default",
  message,
}: {
  state: "default" | "error" | "success";
  message: any;
}) {
  switch (state) {
    case "default":
      console.log(message);
      break;
    case "error":
      console.error(`\x1b[31m%s\x1b[0m - ${message}`, "ERROR");
      break;
    case "success":
      console.log(`\x1b[32m%s\x1b[0m - ${message}`, "SUCCESS");
      break;
  }
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// This function will sanitize the file path and return a valid variable name
function sanitizeFilePath(filePath: string): string {
  // Replace invalid characters with underscores
  let sanitizedPath = filePath.replace(/[^a-zA-Z0-9_$]/g, "_");

  // Ensure the variable name does not start with a number
  if (/^[0-9]/.test(sanitizedPath)) {
    sanitizedPath = "_" + sanitizedPath;
  }

  // Convert to lowercase and replace multiple underscores with a single underscore
  sanitizedPath = sanitizedPath.replace(/_+/g, "_").toLowerCase();

  // Ensure the first character is a valid letter or underscore
  if (!/^[a-zA-Z_$]/.test(sanitizedPath.charAt(0))) {
    sanitizedPath = "_" + sanitizedPath;
  }

  return sanitizedPath;
}

interface ImportInfo {
  defaultImport: string | null;
  namedImports: string[];
  importPath: string;
}

type ImportResult = ImportInfo[];

// Extracts import information from a string in the format:
// import { useState } from "react";
// to
// [
//   {
//     defaultImport: null,
//     namedImports: ["useState"],
//     importPath: "react",
//   }
// ]

function extractImports(importString: string): ImportResult {
  const importStatements = importString
    .split(";")
    .filter((statement) => statement.trim().startsWith("import"));

  const DATA = importStatements.map((statement) => {
    const importInfo: ImportInfo = {
      defaultImport: null,
      namedImports: [],
      importPath: "",
    };

    // Extract import path
    const pathMatch = statement.match(/from\s+['"](.+?)['"]/);
    if (pathMatch) {
      importInfo.importPath = pathMatch[1];
    }

    // Extract default import and named imports
    const importMatch = statement.match(/import\s+([\w\s,{}\*]+)\s+from/);
    if (importMatch) {
      const imports = importMatch[1].trim();

      // Check for default import
      const defaultImportMatch = imports.match(/^(\w+)(?:,|\s*{|\s+\*)/);
      if (defaultImportMatch) {
        importInfo.defaultImport = defaultImportMatch[1];
      }

      // Check for named imports
      const namedImportsMatch = imports.match(/{([^}]+)}/);
      if (namedImportsMatch) {
        importInfo.namedImports = namedImportsMatch[1]
          .split(",")
          .map((imp) => imp.trim());
      }

      // Check for namespace import
      const namespaceImportMatch = imports.match(/\*\s+as\s+(\w+)/);
      if (namespaceImportMatch) {
        importInfo.namedImports.push(`* as ${namespaceImportMatch[1]}`);
      }
    }

    return importInfo;
  });
  const JSON_FORMAT = JSON.stringify(DATA, null, 2);
  return JSON.parse(JSON_FORMAT);
}

interface NameReplacementObjectProps {
  current: string;
  replacement: string;
}

interface GenerateImportsReturnType {
  imports: string;
  nameReplacement: NameReplacementObjectProps[];
}

// It will convert the imports to Lazy imports for faster loading
// Here discriminator is used as a unique identifier for the lazy import. We are merging two files and there is a comman name in bith than it will create a conflict. Thus the name will be suffixed with discriminator.
// The discriminator is the file path hence won't change on every generation unlike a CUID2 generated Name and won't create git issues.

function generateImports(
  ImportLine: ImportInfo,
  discriminator: string
): GenerateImportsReturnType {
  // An array that will strore the current name and the new name that needs to be replaced
  let nameReplacement: NameReplacementObjectProps[] = [];

  // Generate for default import
  const generatedDefaultImportLine = ImportLine.defaultImport
    ? `const ${ImportLine.defaultImport}_${discriminator} = React.lazy(() =>\n\timport('${ImportLine.importPath}').\n\t\tthen((mod) => ({\n\t\t\tdefault: mod.${ImportLine.defaultImport},\n\t}))\n);`
    : "";

  // If there is a default import, add it to the nameReplacement array
  if (generatedDefaultImportLine !== "" && ImportLine.defaultImport) {
    nameReplacement.push({
      current: ImportLine.defaultImport,
      replacement: `${ImportLine.defaultImport}_${discriminator}`,
    });
  }

  // Generate for named imports
  let generatedNamedImports = "";

  // If there is a named import, parse one by one
  ImportLine.namedImports.map((namedImport) => {
    // Checking if the named import contains "as" and the necessary logic
    if (namedImport.includes("as")) {
      const preTag = namedImport.split("as")[0];
      const postTag = namedImport.split("as")[1] + "_" + discriminator;
      nameReplacement.push({
        current: namedImport.split("as")[1],
        replacement: postTag,
      });

      const generatedImportLine = `export const ${postTag} = React.lazy(() =>\n\timport('${ImportLine.importPath}')\n\t\t.then((mod) => ({\n\t\t\tdefault: mod.${preTag}\n\t}))\n);`;

      generatedNamedImports =
        generatedNamedImports + "\n" + generatedImportLine;
    } else {
      const generatedImportLine = `export const ${namedImport}_${discriminator} = React.lazy(() =>\n\timport('${ImportLine.importPath}')\n\t\t.then((mod) => ({\n\t\t\tdefault: mod.${namedImport}\n\t}))\n);`;

      nameReplacement.push({
        current: namedImport,
        replacement: `${namedImport}_${discriminator}`,
      });

      generatedNamedImports =
        generatedNamedImports + "\n" + generatedImportLine;
    }
  });

  const ReturnObject: GenerateImportsReturnType = {
    imports: generatedDefaultImportLine + "\n" + generatedNamedImports,
    nameReplacement: nameReplacement,
  };

  return ReturnObject;
}

// It will extract the imports and generate the lazy imports
function ImportFilter(input: string, filePath: string): string | null {
  // Get category from path
  const category = filePath.split(`docs${path.sep}`)[1].split(path.sep)[0];

  // Regex for code block
  const CodeBlockRegex = /<\s*CodeBlock\s*>([\s\S]*?)<\s*\/\s*CodeBlock\s*>/;

  // Removing code block from the input as if we change the imports it should not affect the codeblock strings
  let InputStrExceptCodeBlock = input.replace(
    CodeBlockRegex,
    "<CodeBlock></CodeBlock>"
  );

  // Storing the code block in a variable
  const CodeBlockMatch = input.match(CodeBlockRegex);
  const InputStringCodeBlock = CodeBlockMatch ? CodeBlockMatch[1] : null;

  // Will sanitize the file path and return a valid variable name
  // This will be used in discriminator
  const relativePath = filePath
    .split("docs" + path.sep)[1]
    .split(path.extname(filePath))[0];
  const sanitizedRelativePath = sanitizeFilePath(relativePath);

  // Regex for imports extraction from import wrapper
  const ImportWrapperRegex =
    /<\s*ImportsWrapper\s*>([\s\S]*?)<\s*\/\s*ImportsWrapper\s*>/;
  const match = InputStrExceptCodeBlock.match(ImportWrapperRegex);
  const importStrings = match ? match[1].trim() : null;

  if (importStrings) {
    // convert the string into JSON Format
    const JSON_OF_IMPORTS: ImportResult = extractImports(importStrings);

    let generatedLazyImports = "";

    // iterating over the JSON of imports
    JSON_OF_IMPORTS.map((single_import) => {
      // generate the lazy import for each import
      const ImportObject: GenerateImportsReturnType = generateImports(
        single_import,
        sanitizedRelativePath
      );
      const ImportLine = ImportObject.imports;
      generatedLazyImports = generatedLazyImports + "\n" + ImportLine;

      // The names for the imports will be changed to include the discriminator
      // this will avoid conflicts in the imports
      ImportObject.nameReplacement.forEach((replacement) => {
        const current = replacement.current.replace(" ", "");
        const replace = replacement.replacement.replace(" ", "");

        const NameChangeRegex = new RegExp(
          `<\\s*\\/\\s*${current}\\s*\\/?>|<\\s*${current}\\b[^>]*\\/?>`,
          "gi"
        );

        InputStrExceptCodeBlock = InputStrExceptCodeBlock.replace(
          NameChangeRegex,
          (match, attributes) => {
            // If attributes are present, include them in the replacement
            if (attributes !== undefined) {
              return match.replace(
                new RegExp(`\\b${current}\\b`, "gi"),
                replace
              );
            } else {
              // Handle self-closing and closing tags without attributes
              return match
                .replace(new RegExp(`\\b${current}\\b`, "gi"), replace)
                .replace(/\s+/g, " ");
            }
          }
        );
      });
    });

    // Adding the code block back
    const inputProcessed = InputStrExceptCodeBlock.replace(
      "<CodeBlock></CodeBlock>",
      InputStringCodeBlock
        ? `<CodeBlock>\n${InputStringCodeBlock}\n</CodeBlock>\n`
        : ""
    );

    // Removing the Import Wrapper along with old imports
    // Replacing with the new lazy imports
    let newImports = inputProcessed.replace(
      ImportWrapperRegex,
      generatedLazyImports
    );

    // Wrapping the suspense tag in the lazy imports to avoid hydration issues
    SUSPENSED_TAGS.forEach((tag) => {
      const regex = new RegExp(
        `<\\s*${tag}\\s*>([\\s\\S]*?)<\\s*\\/\\s*${tag}\\s*>`,
        "g"
      );

      let SkeletonClassName = "";
      if (category === "components") SkeletonClassName = "h-[800px] rounded-lg";
      else if (category === "primitives") SkeletonClassName = "h-60 rounded-lg";
      else SkeletonClassName = "h-60 rounded-lg";

      const internalDataInsideTags = newImports.match(regex);
      const replacedData = `<Suspense fallback={<Skeleton className="${SkeletonClassName}" />}>\n${internalDataInsideTags ? internalDataInsideTags[0] : ""}\n</Suspense>`;
      newImports = newImports.replace(regex, replacedData);
    });

    return newImports;
  }
  return null;
}

// It reads the files, processes them and generates the text for the page
// Will take in the the path of the file and will return the new string

function generatePageText(filePath: string) {
  try {
    let newString: string = "";
    const relativePath = filePath
      .split("StratikUI")[1]
      .slice(1)
      .replace(/\\/g, "/");

    // Check if file is not to be generated : If in DO_NOT_GENERATE than skip
    const isPermitted = !DO_NOT_GENERATE.includes(filePath);
    if (!isPermitted) return "";

    // Flag to give the dir of the source file (i.e. from where it was generated)
    const GENERATED_TEXT = `\n\n{/*\n// ------------------------------------------------------------------------------------\n//\tThe text below is generated from ${relativePath}\n// ------------------------------------------------------------------------------------\n*/}\n\n`;

    // Get category from path
    const category = filePath.split(`docs${path.sep}`)[1].split(path.sep)[0];

    // READ FILE
    const data = fs.readFileSync(filePath, "utf8");

    // Extract the things between <Wrapper> tag
    const WrapperExtract = data.split("<Wrapper>")[1];

    if (!WrapperExtract)
      log({
        state: "error",
        message: `Wrapper tag not found in ${relativePath}`,
      });

    const REGEX = {
      DataObjectRegex: /export\s+const\s+Data\s*=\s*\{[^}]*\}/,
      name: /name\s*:\s*(["'`])(.+?)\1/,
      description: /description\s*:\s*(["'`])(.+?)\1/,
      display: /display\s*:\s*(true|false)/,
    };

    // Extract the data object
    const matchedData = data.match(REGEX.DataObjectRegex);
    const DataObject = matchedData ? matchedData[0] : "";

    if (DataObject) {
      const NameMatched = DataObject.match(REGEX.name);
      const DescriptionMatched = DataObject.match(REGEX.description);
      const DisplayMatched = DataObject.match(REGEX.display);

      if (!NameMatched || !DescriptionMatched || !DisplayMatched) {
        log({
          state: "error",
          message: `Failed to extract the data from ${relativePath}`,
        });
        return "";
      }

      const DataExtracted = {
        name: NameMatched ? NameMatched[2] : "",
        description: DescriptionMatched ? DescriptionMatched[2] : "",
        display: DisplayMatched ? DisplayMatched[1] === "true" : null,
      };

      // If the display is hidden we won't generate the page
      if (DataExtracted.display === null || DataExtracted.display === false)
        return GENERATED_TEXT + "\n\t\tdisplay-false\n\n";

      // Starting for the page that is being generated
      const StratingString = `\n<Wrapper>\n\n# ${DataExtracted.name}\n### ${DataExtracted.description}\n`;

      const ImportFilteredString = ImportFilter(WrapperExtract, filePath);
      const PartitionString = category === "hooks" ? "" : "\n<PARTITION />\n";
      // Assembling the new string
      newString =
        GENERATED_TEXT +
        StratingString +
        (ImportFilteredString ? ImportFilteredString : WrapperExtract) +
        PartitionString;
    } else {
      log({
        state: "error",
        message: `Data object not found in ${relativePath}`,
      });
    }

    if (!newString) return "";
    return newString;
  } catch (err) {
    log({ state: "error", message: err });
  }
}

function generateMDX(
  folderName: string,
  subFolderName: string,
  mdxFiles: string[]
) {
  try {
    let fileDataToBeAdded: string = "";

    if (folderName === "components")
      fileDataToBeAdded = INITIAL_STRING.COMPONENTS;
    else if (folderName === "primitives")
      fileDataToBeAdded = INITIAL_STRING.PRIMITIVES;
    else if (folderName === "hooks") fileDataToBeAdded = INITIAL_STRING.HOOKS;

    for (let i = 0; i < mdxFiles.length; i++) {
      const filePath = path.join(
        contentDir,
        folderName,
        subFolderName,
        mdxFiles[i]
      );
      const strTemp = generatePageText(filePath);

      fileDataToBeAdded += strTemp;
    }

    if (fileDataToBeAdded.includes("React.lazy")) {
      const ReactLazyImport = "import React, { Suspense } from 'react';\n";
      fileDataToBeAdded = ReactLazyImport + fileDataToBeAdded;
    }

    if (fileDataToBeAdded) {
      // Generate the MDX at the target path
      const tragetPath = path.join(
        targetDir,
        folderName,
        subFolderName,
        `page.mdx`
      );

      // Create the file - Add later
      fs.writeFileSync(tragetPath, fileDataToBeAdded, { encoding: "utf-8" });
    }
  } catch (err) {
    log({ state: "error", message: `Error in MDX generation: ${err}` });
  }
}

function createDirectory(path: string) {
  try {
    // Create the directory only if it does not exist
    // Thus avoiding overwriting
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
  } catch (err) {
    log({ state: "error", message: `Error in creating directory: ${err}` });
  }
}

function getFoldersInDir(path: string) {
  try {
    const folders = fs
      .readdirSync(path, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
    return folders;
  } catch (err) {
    log({ state: "error", message: `Error in folderName reading: ${err}` });
  }
}

function getFilesInDir(path: string) {
  try {
    const files = fs
      .readdirSync(path, { withFileTypes: true })
      .filter((dirent) => !dirent.isDirectory() && dirent.name.endsWith(".mdx"))
      .map((dirent) => dirent.name);
    return files;
  } catch (err) {
    log({ state: "error", message: `Error in fileName reading: ${err}` });
  }
}

function emptyDirectory() {
  // Read all the files and directories in the specified directory
  try {
    // Remove the directory and everything inside it
    if (fs.existsSync(targetDir))
      fs.rmSync(targetDir, { recursive: true, force: true });
    log({ state: "success", message: "Previous docs deleted!" });
  } catch (err) {
    log({ state: "error", message: `Error removing previous docs: ${err}` });
  }
}

function handleFileCleanup() {
  try {
    const pfGenerated = getFoldersInDir(targetDir);
    const pfContent = getFoldersInDir(contentDir);

    Array.isArray(pfGenerated) &&
      Array.isArray(pfContent) &&
      pfGenerated.forEach((folder: string) => {
        // GET THE SUB FOLDER DATA
        const sfGenerated = getFoldersInDir(path.join(targetDir, folder));
        const sfContent = getFoldersInDir(path.join(contentDir, folder));

        // ITERATE THROUGH THE SUB FOLDERS OF GENERATED DIRECTORY
        Array.isArray(sfGenerated) &&
          Array.isArray(sfContent) &&
          sfGenerated.forEach((subFolder: string) => {
            // IF THAT FOLDER IS NOT FOUND THAN IT WAS DELETED AND THUS REMOVE IT FROM THE GENERATED DIRECTORY
            if (!sfContent.includes(subFolder)) {
              fs.rmSync(path.join(targetDir, folder, subFolder), {
                recursive: true,
                force: true,
              });
            } else {
              // IF FOUND BUT HAS NO FILES IN IT THAN ALSO REMOVE IT FROM THE GENERATED DIRECTORY
              const files = getFilesInDir(
                path.join(contentDir, folder, subFolder)
              );
              if (files && files.length === 0) {
                fs.rmSync(path.join(targetDir, folder, subFolder), {
                  recursive: true,
                  force: true,
                });
              }
            }
          });
      });

    log({ state: "success", message: "Docs cleaned" });
  } catch (err) {
    log({ state: "error", message: `Error in file lookup: ${err}` });
  }
}

function generateFiles() {
  try {
    log({ state: "success", message: "Generating docs" });

    const folders = getFoldersInDir(contentDir);

    // Iterate through the folders
    Array.isArray(folders) &&
      folders.forEach((folder: string) => {
        createDirectory(path.join(targetDir, folder));
        const subFolders = getFoldersInDir(path.join(contentDir, folder));

        Array.isArray(subFolders) &&
          subFolders.forEach((subFolder: string) => {
            const files = getFilesInDir(
              path.join(contentDir, folder, subFolder)
            );
            if (files && files.length > 0) {
              createDirectory(path.join(targetDir, folder, subFolder));
              generateMDX(folder, subFolder, files);
            }
          });
      });

    handleFileCleanup();
    log({ state: "success", message: "Docs generated" });
  } catch (err) {
    log({ state: "error", message: err });
  }
}

function runAfterValidation() {
  if (!process.env.BUILD_NODE_ENV) generateFiles();
  else if (process.env.BUILD_NODE_ENV === "production") return null;
  else return null;
}

runAfterValidation();
