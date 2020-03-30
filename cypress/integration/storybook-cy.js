const navigateToStory = require("../utils/navigateToStory");

describe("Storybook", () => {
  it.skip("AppChrome has no error", () => {
    navigateToStory("AppChrome");
  });

  it("Avatar has no error", () => {
    navigateToStory("Graphic Elements ", "Avatar");
  });
});
