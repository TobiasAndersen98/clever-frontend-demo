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

  webpackFinal: (config) => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    if (config.resolve) {
      config.resolve.alias = {
        ...config?.resolve?.alias,
        '@/public': path.resolve(__dirname, '../public'),
        '@': path.resolve(__dirname, '../src')
      };
    }

    const imageRule = (config.module.rules as RuleSetRule[]).find(
      (rule) => rule.test instanceof RegExp && rule.test.test('.svg'),
    );
    if (imageRule) {
      imageRule['exclude'] = /\.svg$/;
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: {
        loader: '@svgr/webpack',
        options: {
          dimensions: false
        }
      }
    }); 
    
    return config;
  } 
};
export default config;