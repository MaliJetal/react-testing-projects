module.exports = {
  verbose: true,
  transform: {
    "^.+\\.(js|jsx)?$": ["babel-jest", { rootMode: "upward" }],
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/", "\\.pnp\\.[^\\/]+$"],
};
