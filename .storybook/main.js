/** @type { import('@storybook/vue3-vite').StorybookConfig } */
import vue from '@vitejs/plugin-vue';

const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)",
  ],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-docs",
    "@storybook/docs-tools",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
    "storybook-addon-tag-badges",
    // "@storybook/addon-storysource"
  ],

  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },

  viteFinal: async (config) => {
    config.resolve = {
      alias: {
        '@use': '/src/composables',
        '@utils': '/stories/utils',
      },
    };
    config.plugins = [
        vue(),
        ...config.plugins,
    ]
    return config;
  },

  docs: {}
};
export default config;

// 自訂議 tag-badges
// https://github.com/Sidnioulz/storybook-addon-tag-badges?ref=storybookblog.ghost.io
