const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.diagrams.mdx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
  ],
  staticDirs: ['../assets'],
  webpackFinal: async (config, { configType }) => {
    config.resolve = {
      ...(config.resolve || {}),
      extensions: ['.ts', '.tsx', '.js', '.mdx'],
      alias: {
        "assets": path.resolve(__dirname, '../src', 'assets'),
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
    },
    {
      test: /\.(png|jpg|jpeg|svg|gif|eot|otf|ttf|woff|woff2)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },
    );

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