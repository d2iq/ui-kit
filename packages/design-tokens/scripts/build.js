const transforms = require("./transforms");
const formats = require("./formats");

// Presently, design-tokens is a placeholder package that doesnt publish its own build.
// This script is a hack to build two versions: one that will be published inside ui-kit,
// and one that ui-kit can import in its own build.

const CONFIG = "./packages/design-tokens/config.release.json";
const DEV_CONFIG = "./packages/design-tokens/config.dev.json";

[CONFIG, DEV_CONFIG].forEach(path => {
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
