module.exports = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx)?$": ["babel-jest", { rootMode: "upward" }],
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/", "\\.pnp\\.[^\\/]+$"],
};
