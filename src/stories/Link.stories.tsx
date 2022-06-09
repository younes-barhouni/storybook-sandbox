import Link from 'components/Link';
import React from 'react';
import { cvar } from 'utils/StyleHelper';
import { LinkProps } from 'components/Link/Common';
import { Meta, Story } from '@storybook/react';
import { Typography } from 'components/Typography';
/* eslint-disable no-alert */

export default {
  title: 'Controls/Link',
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => (
  <Typography>
    This is a <Link  {...args} />
  </Typography>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Link',
} as LinkProps;

export const Active = Template.bind({});
Active.args = {
  children: 'Link',
  active: true,
} as LinkProps;

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  children: 'Link',
  style: {
    '--cf-link-color': cvar('--color-secondary'),
    '--cf-link-color-hover': cvar('--color-secondary-light'),
    '--cf-link-color-active': cvar('--color-secondary-dark'),
  },
} as LinkProps;

export const Href = Template.bind({});
Href.args = {
  children: 'Link',
  href: 'https://www.google.com',
  target: '_blank',
  rel: "noopener",
} as LinkProps;