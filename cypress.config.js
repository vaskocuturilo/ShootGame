const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      if (config.env.master) {
        return {
          baseUrl: "https://orc-hunting.netlify.app/",
          env: {
            env: "master"
          },
        };
      } else
        return {
          baseUrl: "http://localhost:8080",
          env: {
            env: "qa"
          },
        };
    },
  },
});
