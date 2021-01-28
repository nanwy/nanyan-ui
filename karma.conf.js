

module.exports = function (config) {
  config.set({
    frameworks: ["mocha"],

    files: ["tests/**/*.spec.js"],

    preprocessors: {
      "**/*.spec.js": ["sourcemap"],
    },

    reporters: ["spec", "coverage"],
    coverageReporter: {
      dir: "./coverage",
      includeAllSources: true,
      reporters: [{ type: "lcov", subdir: "." }, { type: "text-summary" }],
    },

    autoWatch: true,

    browsers: ["ChromeHeadless"],
  });
};
