import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  colorPrimary: '#1ab9c8',
  colorSecondary: '#ffc107',

  // UI
  appBg: '#f5f5f5',
  appContentBg: '#f5f5f5',
  appBorderRadius: 4,

  // Typography
  fontBase: 'Roboto, sans-serif',

  // Text colors
  textColor: 'black',
  textInverseColor: 'black',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: '#fff350',
  barBg: '#1ab9c8',

  brandTitle: 'My Sandbox',
  brandUrl: 'https://github.com/younes-barhouni/storybook-sandbox',
});