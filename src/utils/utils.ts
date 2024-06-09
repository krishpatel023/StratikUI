// This is the latest public version. Please update this when a new version is released. There are version checks and 'new' tags based on this.
export const CURRENT_VERSION = "0.1.0";

// Default Mode of the page false -> light, true -> dark
export const DEFAULT_MODE = true;

export const convertToDashed = (str: string) => {
  const convertToArray = str.toLowerCase().split(" ");
  return convertToArray.join("-");
};

export const Links = {
  personal: {
    github: "https://github.com/krishpatel023",
    twitter: "https://x.com/krish__23",
    linkedin: "https://www.linkedin.com/in/krish-patel-7824231ba",
  },
};
