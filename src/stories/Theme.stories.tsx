import Button from 'components/Button';
import React from 'react';
import { AppContainer, AppContainerProps } from 'components/AppContainer';
import { ITheme } from 'common/Theme';
import { Meta, Story } from '@storybook/react';
import { OverrideTheme } from 'utils/ThemeHelper';

export default {
  title: 'Cosmetic/Theme',
} as Meta;

const Template: Story<AppContainerProps> = (args) => {
  return (
    <AppContainer {...args}>
      <Button>
        Test Override
      </Button>
    </AppContainer>
  );
};

const overridePrimaryColorTheme = {
  '--color-primary': '#a2ffd2',
  '--color-primary-light': '#d6ffff',
  '--color-primary-dark': '#70cba1',
  '--color-primary-on': '#000000',
} as ITheme;

export const OverridePrimaryColor = Template.bind({});
OverridePrimaryColor.args = {
  appTheme: OverrideTheme(overridePrimaryColorTheme),
} as AppContainerProps;
