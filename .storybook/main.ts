import type { StorybookConfig } from '@storybook/nextjs';
import { RuleSetRule } from 'webpack';

import path from 'path';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack"
  ],
  framework: {
    "name": "@storybook/nextjs",
    "options": {}
  },

  docs: {},

  staticDirs: [
    "../public"
  ],
};
export default config;