const path = require("path");
const {
  existsSync,
  mkdirSync,
  readdirSync,
  readFile,
  readFileSync,
  writeFileSync
} = require("fs");
const t = require("@babel/types");
const generate = require("@babel/generator").default;
const { optimize } = require("svgo");
const svgstore = require("svgstore");
const iconSpriteConfig = require("../iconSpriteConfig.js");
const buildDirPath = path.join(__dirname, "../", "dist");
const distDirPath = path.join(
  __dirname,
  "../../../",
  "dist",
  "packages",
  "icons",
  "dist"
);

const getFilePaths = dir => readdirSync(dir).map(file => `${dir}/${file}`);

const writeSprite = (srcDir, spritePath, idPrefix) => {
  console.info(`\tgenerating sprite at:\n\t${spritePath}\n`);

  writeFileSync(
    spritePath,
    getFilePaths(srcDir).reduce((sprites, file) => {
      return sprites.add(
        `${idPrefix}-${path.basename(file, ".svg")}`,
        readFileSync(file, "utf8")
      );
    }, svgstore({ renameDefs: true }))
  );
};

const optimizeWithSVGO = spritePath => {
  console.info("\toptimizing sprite\n");

  readFile(spritePath, "utf8", (err, data) => {
    if (err) {
      throw err;
    }

    const result = optimize(data, {
      path: spritePath,
      multipass: true,
      plugins: [
        {
          name: "removeDoctype",
          active: true
        },
        {
          name: "cleanupIDs",
          active: false
        }
      ]
    });

    writeFileSync(spritePath, result.data);
  });
};

const writeEnum = (srcDir, iconSetName, idPrefix) => {
  console.info("\tcreating icon name enum\n");

  const svgNamesObj = getFilePaths(srcDir)
    .map(file => path.basename(file, ".svg"))
    .reduce((prev, curr) => {
      const nameToPascal = curr.replace(/(\-|^)([a-z])/gi, (match, p1, p2) =>
        p2.toUpperCase()
      );

      prev[nameToPascal] = curr;
      return prev;
    }, {});
  const ast = t.tSEnumDeclaration(
    t.identifier(`${iconSetName.replace(/^\w/, c => c.toUpperCase())}Icons`),
    Object.keys(svgNamesObj).map(svgName =>
      t.tSEnumMember(
        t.identifier(svgName),
        t.stringLiteral(`${idPrefix}-${svgNamesObj[svgName]}`)
      )
    )
  );
  const { code } = generate(ast);

  writeFileSync(
    path.join(buildDirPath, `${iconSetName}-icons-enum.ts`),
    // when generate parses the AST, it adds a trailing comma that needs
    // to be removed in order for Prettier to pass
    `export ${code.replace(/,(?=[^,]*$)/, "")}\n`
  );
};

[buildDirPath, distDirPath].forEach(buildPath => {
  !existsSync(buildPath) && mkdirSync(buildPath, { recursive: true });
});

Object.keys(iconSpriteConfig).forEach(iconSet => {
  console.info(`🔧 "${iconSet}" icons`);
  [buildDirPath, distDirPath].forEach(buildPath => {
    writeSprite(
      iconSpriteConfig[iconSet].inDir,
      path.join(buildPath, iconSpriteConfig[iconSet].filename),
      iconSpriteConfig[iconSet].idPrefix
    );
    optimizeWithSVGO(path.join(buildPath, iconSpriteConfig[iconSet].filename));
  });
  writeEnum(
    iconSpriteConfig[iconSet].inDir,
    iconSet,
    iconSpriteConfig[iconSet].idPrefix
  );
});
