module.exports = {
  verbose: true,
  //setupFiles: "<rootDir>/setupTests.js",
  transform: {
    "^.+\\.(js|jsx)?$": ["babel-jest", { rootMode: "upward" }],
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/", "\\.pnp\\.[^\\/]+$"],
};
