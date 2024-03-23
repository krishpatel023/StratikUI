export default function StringCleaner(str: string): string {
  const containerQueriesCleaned = convertContainerQueries(str);

  const darkComponentCleaned = convertDarkComponent(containerQueriesCleaned);

  const output = replaceColorVariables(
    darkComponentCleaned,
    lightComponent,
    darkComponent
  );
  //   console.log(output);

  return output;
}

function convertContainerQueries(input: string): string {
  const containerQueries = [
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "7xl",
  ];
  let output = input;

  for (const query of containerQueries) {
    const regex = new RegExp(`@${query}:`, "g");
    output = output.replace(regex, `${query}:`);
  }

  return output;
}

function convertDarkComponent(input: string): string {
  const regex = /darkComponent:/g;
  const output = input.replace(regex, "dark:");

  return output;
}

interface ColorPalette {
  s_background: string;
  s_foreground: string;
  s_primary: string;
  s_primaryLight: string;
  s_secondary: string;
  s_accent: string;
  s_accentLight: string;
  s_border: string;
  s_textPrimary: string;
  s_textSecondary: string;
  s_textComplementary: string;
  s_success: string;
  s_alert: string;
  s_error: string;
}

const lightComponent: ColorPalette = {
  s_background: "#ffffff",
  s_foreground: "#000000",
  s_primary: "#171717",
  s_primaryLight: "#232323",
  s_secondary: "#f4f4f5",
  s_accent: "#0372f3",
  s_accentLight: "#d5e0ff",
  s_border: "#dfdfe3",
  s_textPrimary: "#000000",
  s_textSecondary: "#71717a",
  s_textComplementary: "#ffffff",
  s_success: "#34d399",
  s_alert: "#ffe629",
  s_error: "rgb(255, 35, 35)",
};
const darkComponent: ColorPalette = {
  s_background: "#000000",
  s_foreground: "#ffffff",
  s_primary: "#ffffff",
  s_primaryLight: "#a4a4a4",
  s_secondary: "#212121",
  s_accent: "#0ea5e9",
  s_accentLight: "#0044ff41",
  s_border: "#505050",
  s_textPrimary: "#f0f0f0",
  s_textSecondary: "#969696",
  s_textComplementary: "#000000",
  s_success: "#34d399",
  s_alert: "#ffe629",
  s_error: "rgb(255, 35, 35)",
};

// function replaceColorVariables(
//   input: string,
//   colorPaletteLight: ColorPalette,
//   colorPaletteDark: ColorPalette
// ): string {
//   const colorVariables = Object.keys(colorPaletteLight);
//   let output = input;

//   for (const variable of colorVariables) {
//     const lightRegex = new RegExp(`(?<!dark:)[a-z]+-${variable}`, "g");
//     const darkRegex = new RegExp(`dark:[a-z]+-${variable}`, "g");
//     const darkRegexAfter = /dark:[a-z]+-\[#[0-9a-fA-F]+\]/g;

//     const lightValue = (colorPaletteLight as any)[variable];
//     const darkValue = (colorPaletteDark as any)[variable];

//     const initRegex = new RegExp(`(?<!dark:)[a-z]+-${variable}`, "g");
//     output = output.replace(initRegex, `$& dark:$& `);
//     console.log("init", variable, output.match(initRegex), output);

//     if (output.match(darkRegex) && !output.match(darkRegexAfter)) {
//       const tempRegex = new RegExp(`dark:([a-z]+)-${variable}`, "g");
//       output = output.replace(tempRegex, `dark:$1-[${darkValue}]`);
//       console.log("dark", output.match(darkRegexAfter));
//     }
//     // if (output.match(lightRegex)) {
//     //   console.log("light", output.match(lightRegex));

//     //   const tempRegex = new RegExp(`([a-z]+)-${variable}`, "g");
//     //   output = output.replace(tempRegex, `$1-[${lightValue}]`);
//     // }
//   }

//   return output;
// }

function replaceColorVariables(
  input: string,
  colorPaletteLight: ColorPalette,
  colorPaletteDark: ColorPalette
): string {
  const colorVariables = Object.keys(colorPaletteLight);
  let output = input;

  for (const variable of colorVariables) {
    // Match patterns like 'bg-s_background' and 'text-s_background' (without 'dark:' prefix)
    const lightRegex = new RegExp(
      `(?<!dark:)(bg|text|border|ring|placeholder|fill)-${variable}`,
      "g"
    );

    // Match patterns like 'dark:bg-s_background' and 'dark:text-s_background'
    const darkRegex = new RegExp(`dark:([a-z]+)-${variable}`, "g");

    // Match patterns like 'dark:bg-[#000000]', 'dark:text-[#000000]', 'dark:bg-[rgb(0,0,0)]', and 'dark:text-[rgb(0,0,0)]'
    const darkRegexAfter = new RegExp(
      `dark:([a-z]+)-\\[(#[0-9a-fA-F]{6}|rgb\\([0-9]+,\\s?[0-9]+,\\s?[0-9]+\\))\\]`,
      "g"
    );

    const lightValue = (colorPaletteLight as any)[variable];
    const darkValue = (colorPaletteDark as any)[variable];

    // Replace 'bg-s_background' with 'bg-[${lightValue}] dark:bg-[${darkValue}]'
    output = output.replace(
      lightRegex,
      `$1-[${lightValue}] dark:$1-[${darkValue}]`
    );

    // Replace 'dark:bg-s_background' with 'dark:bg-[${darkValue}]'
    // output = output.replace(darkRegex, `dark:$1-[${darkValue}]`);

    // Leave patterns like 'dark:bg-[#000000]' and 'dark:bg-[rgb(0,0,0)]' unchanged
    output = output.replace(darkRegex, ``);
  }

  return output;
}
