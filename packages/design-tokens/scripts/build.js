const StyleDictionary = require("style-dictionary").extend(
  "./packages/design-tokens/config.json"
);
const transforms = require("./transforms");
const formats = require("./formats");

transforms.forEach(t => {
  console.info(`Registering Transform: '${t.name}'`);
  StyleDictionary.registerTransform(t);
});

formats.forEach(f => {
  console.info(`Registering Format: '${f.name}'`);
  StyleDictionary.registerFormat(f);
});

StyleDictionary.buildAllPlatforms();
