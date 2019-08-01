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
    }${transformStringCase(subitem, isCamelCase)}`,
    c_i_si: `${category}${delimiter}${transformStringCase(item, isCamelCase)}${
      subitem ? delimiter : ""
    }${transformStringCase(subitem, isCamelCase)}`
  };
};

const getFormattedName = (prop, namePatterns) => {
  const { category, type } = prop.attributes;

  switch (category) {
    case "color":
      return type !== "base" ? namePatterns.t_c_i_si : namePatterns.i_si_s;
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

module.exports = [jsConstant, lessVar, cssVarJS];
