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
const INITIAL_STRING = `import { Implementation, Preview, Header, Display, TechnologyUsed, Wrapper } from "@/components/mdx/MDXServerImports"
import { CodeBlock, ResizableDisplay } from "@/components/mdx/MDXClientImports"\n`;

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

    // Header string according to category
    let HeaderString = "";
    if (category === "components" || category === "primitives")
      HeaderString = `\n<Header />\n`;
    else HeaderString = "";

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
      const StratingString = `\n<Wrapper>\n\n\n# ${DataExtracted.name}\n### ${DataExtracted.description}\n`;

      // Assembling the new string
      newString =
        GENERATED_TEXT + StratingString + HeaderString + WrapperExtract;
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
    let fileDataToBeAdded: string = INITIAL_STRING;

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
