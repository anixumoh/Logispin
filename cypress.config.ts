import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //Set URL based on value in the environment
      config.baseUrl = (config.env.ENV === 'production' ? "https://www.google.com/" : config.env.ENV === 'staging' ? "https://www.stg-google.com/" : null);
      return config
    }
  },
  env: {
    "ENV": "production"
  },
  watchForFileChanges:false
});
