import React from 'react';
import { Blockquote, BlockquoteProps } from 'components/Blockquote';
import { Meta, Story } from '@storybook/react';
/* eslint-disable no-alert */

export default {
  title: 'Controls/Blockquote',
  component: Blockquote,
} as Meta;

const Template: Story<BlockquoteProps> = (args) => <Blockquote {...args} />;

export const Default = Template.bind({});
Default.args = {
  cite: 'https://martinfowler.com/books/refactoring.html',
  children: <>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</>,
  caption: <>
    Some caption and source <a target="_blank" href="https://martinfowler.com/books/refactoring.html">here</a>
  </>,
} as BlockquoteProps;
