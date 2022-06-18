const tsconfig = require("./tsconfig.json");
let rawAlias = tsconfig.compilerOptions.paths;
let alias = {};

for (let x in rawAlias) {
  alias[x.replace("/*", "")] = rawAlias[x].map((p) => p.replace("/*", ""));
}

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "tailwindcss-react-native/babel",
      [
        "module-resolver",
        {
          root: ["./"],
          extensions: [
            ".ios.js",
            ".android.js",
            ".ios.jsx",
            ".android.jsx",
            ".js",
            ".ios.ts",
            ".android.ts",
            ".ios.tsx",
            ".android.tsx",
            ".ts",
            ".tsx",
            ".json",
          ],
          alias,
        },
      ],
    ],
  };
};
