const transforms = require("./transforms");
const formats = require("./formats");

// Because we export non-Typescript files (only `.less` at the time of comment), we need
// to build two versions: one that will be compiled by Typescript, and one that's manually
// published in the `dist/` directory.

const CONFIG = "./packages/design-tokens/config.tsCompiled.json";
const DIST_CONFIG = "./packages/design-tokens/config.manualPublish.json";

[CONFIG, DIST_CONFIG].forEach(path => {
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
