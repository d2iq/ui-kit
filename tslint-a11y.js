const path = require("path");

module.exports = {
  rulesDirectory: path.dirname(require.resolve("tslint-microsoft-contrib")),
  rules: {
    "react-a11y-anchors": true,
    "react-a11y-aria-unsupported-elements": true,
    "react-a11y-event-has-role": true,
    "react-a11y-image-button-has-alt": true,
    "react-a11y-img-has-alt": true,
    "react-a11y-lang": true,
    "react-a11y-props": true,
    "react-a11y-proptypes": true,
    "react-a11y-role-has-required-aria-props": true,
    "react-a11y-role-supports-aria-props": true,
    "react-a11y-role": true,
    "react-a11y-tabindex-no-positive": true,
    "react-a11y-titles": false,
    "react-a11y-meta": true,
  },
};