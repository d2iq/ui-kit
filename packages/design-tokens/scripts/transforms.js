const transformStringCase = (s, isCamelCase) =>
  s ? (isCamelCase ? s.charAt(0).toUpperCase() + s.slice(1) : s) : "";

const getPropNamePatterns = (prop, opts) => {
  let { category, type, item, subitem, state } = prop.attributes;
  const { delimiter, isCamelCase } = opts;
  subitem = subitem === "base" ? "" : subitem;

  return {
    c_t_i: `${category}${delimiter}${transformStringCase(
      type,
      isCamelCase
    )}${delimiter}${transformStringCase(item, isCamelCase)}`,
    i_si_s: `${item}${subitem ? delimiter : ""}${transformStringCase(
      subitem,
      isCamelCase
    )}${state ? delimiter : ""}${transformStringCase(state)}`,
    t_i: `${type}${delimiter}${transformStringCase(item, isCamelCase)}`,
    t_c_i_si: `${type}${delimiter}${transformStringCase(
      category,
      isCamelCase
    )}${delimiter}${transformStringCase(item, isCamelCase)}${
      subitem ? delimiter : ""
    }${transformStringCase(subitem, isCamelCase)}`
  };
};

const getFormattedName = (prop, namePatterns) => {
  const { category, type } = prop.attributes;

  let name;
  switch (category) {
    case "color":
      name = type !== "base" ? namePatterns.t_c_i_si : namePatterns.i_si_s;
      break;
    case "layout":
      name = namePatterns.t_i;
      break;
    case "font":
      name = namePatterns.c_t_i;
      break;
    default:
      name = namePatterns.c_t_i;
  }

  return name;
};

const fontNameJS = {
  name: "value/fontNameJS",
  type: "value",
  matcher: prop => prop.attributes.category === "font",
  transformer: (prop, options) => {
    return prop.original.value.replace(/'/g, '"');
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

module.exports = [jsConstant, lessVar, fontNameJS];
