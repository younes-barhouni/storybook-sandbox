import Button, { ButtonProps } from 'components/Button';
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { userEvent, within, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
/* eslint-disable no-alert */

export default {
  title: '🧬 Atoms/<ev-button>',
  component: Button,
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const ViaChildren = Template.bind({});
ViaChildren.args = {
  children: 'From Children!',
} as ButtonProps;

// test intercation .play
ViaChildren.play = async ({args, canvasElement}) => {
  const canvas = within(canvasElement);

  const myButton = canvas.getByRole('button', { name: /From Children/i });

  await userEvent.click(myButton);

  await waitFor(() => expect(args.onClick).toHaveBeenCalled());
};
