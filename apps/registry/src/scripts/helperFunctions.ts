import fs from "node:fs";
import path from "node:path";

// This function will help us log the output to the console with color scheme
export function log({
	state = "default",
	message,
}: {
	state: "default" | "error" | "success" | "warning";
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
		case "warning":
			console.warn(`\x1b[33m%s\x1b[0m - ${message}`, "WARNING");
			break;
	}
}

//   This function will help us find the target directory and package directory. It will return an object with the two directories. It will check all the necessary conditions and exit the process if any of them are not met.
export function DirPathFinder() {
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
	const targetDir = path.join(
		replacedPath,
		"src",
		"app",
		"docs",
		"(generatedDocs)",
	);
	// const targetDir = path.join(process.cwd(), "src", "(generatedDocs)");

	// PACKAGE DIR - This is where the packages are located. i.e. registry/src/packages
	const packageDir = path.join(process.cwd(), "src", "packages");

	return { targetDir, packageDir };
}

// This function will sanitize the file path and return a valid variable name
export function sanitizeFilePath(filePath: string): string {
	// Replace invalid characters with underscores
	let sanitizedPath = filePath.replace(/[^a-zA-Z0-9_$]/g, "_");

	// Ensure the variable name does not start with a number
	if (/^[0-9]/.test(sanitizedPath)) {
		sanitizedPath = `_${sanitizedPath}`;
	}

	// Convert to lowercase and replace multiple underscores with a single underscore
	sanitizedPath = sanitizedPath.replace(/_+/g, "_").toLowerCase();

	// Ensure the first character is a valid letter or underscore
	if (!/^[a-zA-Z_$]/.test(sanitizedPath.charAt(0))) {
		sanitizedPath = `_${sanitizedPath}`;
	}

	return sanitizedPath;
}

// This function will capitalize the first letter of a string
export function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

// It will create a directory if it does not exist
export function createDirectory(path: string) {
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

//   It will return an array of folders in a directory
export function getFoldersInDir(path: string) {
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

//   It will return an array of files in a directory
export function getFilesInDir(path: string) {
	try {
		const files = fs
			.readdirSync(path, { withFileTypes: true })
			.filter((dirent) => !dirent.isDirectory())
			.map((dirent) => dirent.name);
		return files;
	} catch (err) {
		log({ state: "error", message: `Error in fileName reading: ${err}` });
	}
}

// This function gives the reference from the packages folder
export function getPathWithReferenceFromPackages(folderPath: string) {
	return folderPath.split(
		`${path.sep}apps${path.sep}registry${path.sep}src${path.sep}packages${path.sep}`,
	)[1];
}

export function customLog(message: string) {
	const logPath = path.join(process.cwd(), "src", "(generatedDocs)", "log.txt");
	console.log(message);
}

export function stringToDashedString(str: string) {
	// reduce all to lowercase
	const strLower = str.toLowerCase();

	const arr = strLower.split(" ");
	return arr.join("-");
}

export function compareVersions(version1: string, version2: string) {
	const v1Parts = version1.split(".");
	const v2Parts = version2.split(".");

	for (let i = 0; i < v1Parts.length; i++) {
		const v1Part = Number.parseInt(v1Parts[i]);
		const v2Part = Number.parseInt(v2Parts[i]);

		if (v1Part > v2Part) {
			return true;
		}
	}

	return false;
}

export function terminalLink(text: string, link: string) {
	const blueText = `\u001b[34m${text}\u001b[0m`; // \u001b[34m starts blue text, \u001b[0m resets to default
	const clickableLink = `\u001b]8;;${link}\u0007${blueText}\u001b]8;;\u0007`;
	return clickableLink;
}
