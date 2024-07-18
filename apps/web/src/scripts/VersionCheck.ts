import { CURRENT_VERSION } from "@/utils/utils";

export const versionCheck = (
  version1: string,
  version2: string = CURRENT_VERSION
) => {
  const version1_array = version1.split(".");
  const version2_array = version2.split(".");
  var flag = true;
  for (let i = 0; i < version1_array.length; i++) {
    if (parseInt(version1_array[i]) < parseInt(version2_array[i])) {
      flag = false;
    }
  }
  return flag;
};
