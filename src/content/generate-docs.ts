import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "src", "content", "docs");
const targetDir = path.join(
  process.cwd(),
  "src",
  "app",
  "docs",
  "(generatedDocs)"
);

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

function generateMDX(
  folderName: string,
  subFolderName: string,
  mdxFiles: string[]
) {
  try {
    // Generate the imports
    const imports = mdxFiles.map((file: string) => {
      const componentName = path.basename(file, ".mdx");
      const relativePath = `@/content/docs/${folderName}/${subFolderName}/${file.split(".mdx")[0]}`;
      return `import ${componentName} from '${relativePath}.mdx'`;
    });

    // Generate the components
    const components = mdxFiles.map((file: string) => {
      const componentName = path.basename(file, ".mdx");
      return `<${componentName} />`;
    });

    // Generate the content - combine imports and components
    const content = `${imports.join("\n")}\n\n${components.join("\n")}`;

    if (content) {
      // Generate the MDX
      const filePath = path.join(
        targetDir,
        folderName,
        subFolderName,
        `page.mdx`
      );

      // Create the file
      fs.writeFileSync(filePath, content, { encoding: "utf-8" });
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
