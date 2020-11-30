module.exports = {
    stories: ["../packages/**/*.stories.@(tsx)"],
    addons: [
        "storybook-readme",
        "@storybook/addon-knobs",
        "@storybook/addon-actions",
        "@storybook/addon-a11y",
    ],
};