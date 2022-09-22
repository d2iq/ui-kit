const transforms = require("./transforms");
const formatCategory = process.env.FORMAT || "default";

// Because we export non-Typescript files, we have three configurations to build with:

// for JavaScript and Typescript
const CONFIG = "./packages/design-tokens/config.tsCompiled.json";

// for LESS
const DIST_CONFIG = "./packages/design-tokens/config.manualPublish.json";

// for Markdown docs
const DOCS_CONFIG = "./packages/design-tokens/config.designGuidelines.json";

const configs =
  formatCategory === "docs" ? [DOCS_CONFIG] : [CONFIG, DIST_CONFIG];

import("./formats.mjs").then(({ default: formats }) => {
  configs.forEach(path => {
    const StyleDictionary = require("style-dictionary").extend(path);

    transforms.forEach(t => {
      console.info(`Registering Transform: '${t.name}'`);
      StyleDictionary.registerTransform(t);
    });

    formats.forEach(f => {
      console.info(`Registering Format: '${f.name}'`);
      StyleDictionary.registerFormat(f);
    });

    StyleDictionary.buildAllPlatforms();
  });
});
