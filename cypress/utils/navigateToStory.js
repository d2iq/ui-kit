function noOp() {}

/**
 * Navigates to a story iframe and checks that there are no console errors
 *
 * @param {String} name name of the story to test
 * @param {Function} cb callback to run assertions in
 */
function navigateToStory(category, name, cb) {
  cy.visit("/");
  // Navigate to story with the name
  const storySideBar =  "#" + category.replace(/\s+/g, "-").toLowerCase() + name.toLowerCase();
  cy.log(`Open story ${category} ${name} - ${storySideBar}`);
  cy.get(storySideBar).click();
  cy.get(".tabbutton").contains("Readme").click();
  cy.get("#storybook-panel-root").contains(name);

  // Get story ID to visit iframe directly
  cy.window().then(win => {
    const storyId = win.location.href.split("?path=/story/")[1];

    cy.visit("/iframe.html?id=" + storyId).then(iframeWin => {
      const consoleErrorSpy = cy.spy(iframeWin.console, "error");
      const consoleWarnSpy = cy.spy(iframeWin.console, "warn");

      (cb || noOp)();

      // Wait for app to render
      cy.contains(name).then(() => {
        expect(consoleErrorSpy).not.to.be.called;
        expect(consoleWarnSpy).not.to.be.called;
      });
    });
  });
}

module.exports = navigateToStory;
