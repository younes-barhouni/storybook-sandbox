import { SandboxTheme, ITheme } from 'common/Theme';
/* eslint-disable import/prefer-default-export */

/**
 * Function to override a target theme.
 * Properties provided will be merged against the target theme.
 * @param customTheme Custom Theme properties to override
 * @param overrideTarget Target Theme to override against
 */
export const OverrideTheme = <T extends ITheme>(
  customTheme: T,
  overrideTarget: ITheme = SandboxTheme,
): ITheme => ({
    ...overrideTarget,
    ...customTheme,
  });
