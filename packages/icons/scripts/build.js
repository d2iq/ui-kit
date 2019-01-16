const path = require("path");
const {
  existsSync,
  mkdirSync,
  readdirSync,
  readFile,
  readFileSync,
  writeFileSync
} = require("fs");
const SVGO = require("svgo");
const svgstore = require("svgstore");
const iconSpriteConfig = require("../iconSpriteConfig.js");
const svgo = new SVGO({
  plugins: [
    {
      removeDoctype: true,
    },
    {
      cleanupIDs: false,
    }
  ]
});
const buildDirPath = path.join(__dirname, "../", "dist");

const getFilePaths = dir =>
  readdirSync(dir).map(file => `${dir}/${file}`);

const writeSprite = (srcDir, spritePath, idPrefix) => {
  console.info(`\tgenerating sprite at:\n\t${spritePath}\n`);

  writeFileSync(
    spritePath,
    getFilePaths(srcDir).reduce((sprites, file) => {
      return sprites.add(`${idPrefix}-${path.basename(file, ".svg")}`, readFileSync(file, "utf8"));
    }, svgstore({renameDefs: true}))
  );
};

const optimizeWithSVGO = spritePath => {
  console.info("\toptimizing sprite\n");

  readFile(spritePath, "utf8", (err, data) => {
    if (err) {
      throw err;
    }

    svgo.optimize(data, { path: spritePath }).then(result => {    
      writeFileSync(spritePath, result.data);
    });
  });
};

const writeEnum = (srcDir, iconSetName, idPrefix) => {
  console.info("\tcreating icon name enum\n");
  const svgNamesObj =
    getFilePaths(srcDir)
      .map(file => path.basename(file, ".svg"))
      .reduce((prev, curr) => {
        const nameToPascal = curr.replace(/(\-|^)([a-z])/gi, (match, p1, p2) => p2.toUpperCase());

        prev[nameToPascal] = curr;
        return prev;
      }, {});

  const enumString = Object.keys(svgNamesObj).reduce((prev, curr) =>
    prev += `${curr} = "${idPrefix}-${svgNamesObj[curr]}",`,
  "")
    .split(",")
    .filter(entry => entry != "")
    .join(",\n  ");

  const enumName = `${iconSetName.replace(/^\w/, c => c.toUpperCase())}Icons`

  writeFileSync(
    path.join(buildDirPath, `${iconSetName}-icons-enum.ts`),
    `export enum ${enumName} {\n  ${enumString}\n}\n`
  );
}

if (!existsSync(buildDirPath)) {
  mkdirSync(buildDirPath);
}

Object.keys(iconSpriteConfig).forEach(iconSet => {
  console.info(`🔧 "${iconSet}" icons`);
  writeSprite(
    iconSpriteConfig[iconSet].inDir,
    path.join(buildDirPath, iconSpriteConfig[iconSet].filename),
    iconSpriteConfig[iconSet].idPrefix
  );
  optimizeWithSVGO(
    path.join(buildDirPath, iconSpriteConfig[iconSet].filename)
  );
  writeEnum(
    iconSpriteConfig[iconSet].inDir,
    iconSet,
    iconSpriteConfig[iconSet].idPrefix
  );
});
