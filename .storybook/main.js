const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve = {
      ...(config.resolve || {}),
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        "common": path.resolve(__dirname, '../src', 'common'),
        "components": path.resolve(__dirname, '../src', 'components'),
        "hooks": path.resolve(__dirname, '../src', 'hooks'),
        "utils": path.resolve(__dirname, '../src', 'utils'),
        "styles": path.resolve(__dirname, '../src', 'styles'),
      },
    }

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]-[hash:base64:5]'
            },
          },
        },
        'sass-loader'
      ],
      include: path.resolve(__dirname, '../'),
    });

    if (process.env.NODE_ENV === 'Docker') {
      config.watchOptions = {
        aggregateTimeout: 500,
        poll: 1000,
      }
    }

    // Return the altered config
    return config;
  },
}