const dateHeader = () => `
  /**
   * Do not edit directly
   * Generated on ${new Date()}
   */
`;

const colorsForStyleguide = {
  name: "javascript/colorsForStyleguide",
  formatter: dictionary =>
    `
    ${dateHeader()}
    export const coreColors = () => (
      ${JSON.stringify(
        dictionary.allProperties.reduce((acc, curr) => {
          acc[curr.name] = curr.value;
          return acc;
        }, {}),
        null,
        3
      )}
    );`
};

const commonJS = {
  name: "javascript/commonJS",
  formatter: dictionary =>
    `${dateHeader()}\n${dictionary.allProperties
      .map(prop => `exports.${prop.name} = '${prop.value}';`)
      .join("\n")}`
};

module.exports = [colorsForStyleguide, commonJS];
