const transformStringCase = (s, isCamelCase) =>
  s ? (isCamelCase ? s.charAt(0).toUpperCase() + s.slice(1) : s) : "";

// Design token naming patterns use the "Category / Type / Item" structure
// https://amzn.github.io/style-dictionary/#/properties?id=category-type-item
const getPropNamePatterns = (prop, opts) => {
  let { category, type, item, subitem, state } = prop.attributes;
  const { delimiter, isCamelCase } = opts;
  subitem = subitem === "base" ? "" : subitem;

  return {
    // Category / Type / Item
    // example: fontSizeM
    c_t_i: `${category}${delimiter}${transformStringCase(
      type,
      isCamelCase
    )}${delimiter}${transformStringCase(item, isCamelCase)}`,

    // Item / Subitem / State
    // example: purpleDarken1
    i_si_s: `${item}${subitem ? delimiter : ""}${transformStringCase(
      subitem,
      isCamelCase
    )}${state ? delimiter : ""}${transformStringCase(state)}`,

    // Type / Item
    // example: spaceL
    t_i: `${type}${delimiter}${transformStringCase(item, isCamelCase)}`,

    // Type / Category / Item / Subitem
    // example: textColorPrimaryInverted
    t_c_i_si: `${type}${delimiter}${transformStringCase(
      category,
      isCamelCase
    )}${delimiter}${transformStringCase(item, isCamelCase)}${
      subitem ? delimiter : ""
    }${transformStringCase(subitem, isCamelCase)}`,

    // Category / Item / Subitem
    // example: themeBorderInverted
    c_i_si: `${category}${delimiter}${transformStringCase(item, isCamelCase)}${
      subitem ? delimiter : ""
    }${transformStringCase(subitem, isCamelCase)}`
  };
};

const getFormattedName = (prop, namePatterns) => {
  const { category, type } = prop.attributes;

  switch (category) {
    case "color":
      return type !== "base" && type !== "aliases"
        ? namePatterns.t_c_i_si
        : namePatterns.i_si_s;
    case "layout":
      return namePatterns.t_i;
    case "font":
      return namePatterns.c_t_i;
    case "theme":
      return namePatterns.c_i_si;
    default:
      return namePatterns.c_t_i;
  }
};

const cssVarJS = {
  name: "value/cssVarJS",
  type: "value",
  matcher: prop => prop.attributes.category === "theme",
  transformer: prop => {
    const formattedName = getFormattedName(
      prop,
      getPropNamePatterns(prop, { isCamelCase: true, delimiter: "" })
    );

    return `var(--${formattedName}, ${prop.value})`;
  }
};

const jsConstant = {
  name: "name/cti/jsConstant",
  type: "name",
  transformer: prop => {
    return getFormattedName(
      prop,
      getPropNamePatterns(prop, { isCamelCase: true, delimiter: "" })
    );
  }
};

const lessVar = {
  name: "name/cti/lessVar",
  type: "name",
  transformer: prop =>
    getFormattedName(
      prop,
      getPropNamePatterns(prop, { isCamelCase: false, delimiter: "-" })
    )
};

const JS_originalFromAlias = {
  name: "attribute/cti/JS_originalFromAlias",
  type: "attribute",
  matcher: prop => prop.isAlias,
  transformer: prop => {
    const propAttributes = prop.value.replace(/[{}]/g, "").split(".");
    const originalProp = {
      attributes: {
        category: propAttributes[0],
        type: propAttributes[1],
        item: propAttributes[2],
        subitem: propAttributes[3],
        state: propAttributes[4] !== "value" ? propAttributes[4] : ""
      }
    };
    return { originalFromAlias: jsConstant.transformer(originalProp) };
  }
};

module.exports = [jsConstant, lessVar, cssVarJS, JS_originalFromAlias];
