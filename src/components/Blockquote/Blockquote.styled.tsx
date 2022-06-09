import styled, { css } from 'styled-components';
import { cvar, rem } from 'utils';

const QuoteBorderStyle = css`
  border-radius: ${cvar('--control-border-radius')};
  content: '';
  background-image: linear-gradient(to right, ${cvar('--color-secondary-light')}, ${cvar('--color-secondary-dark')}, ${cvar('--color-secondary-light')});
  left: calc(50% - ${rem(10)});
  height: ${rem(2)};
  width: ${rem(20)};
  position: absolute;
`;

const BlockquoteCss = css`
  border-radius: ${cvar('--control-border-radius')};
  margin-bottom: ${rem(20)};
  padding: 0 ${rem(120)};
`;

export const Blockquote = styled.blockquote`${BlockquoteCss}`;

export default {
  BlockquoteCss,
};
