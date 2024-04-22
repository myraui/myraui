import { unwrapRE } from '@myraui/utils';
import { myraColors } from '../../colors';
import { generateConfigTheme } from '../generate-config-theme';
import { ThemeEnv } from '../../theme.types';
import { applyBaseTheme } from '../apply-base-theme';

const env: ThemeEnv = { defaultExtendTheme: 'light', prefix: 'prefix' };

describe('build/generate-config-theme', () => {
  describe('generateConfigTheme', () => {
    it('should generate the config theme based on the generators', () => {
      const fullConfigTheme = unwrapRE(applyBaseTheme('midnight', {}), env);
      const theme = unwrapRE(generateConfigTheme(fullConfigTheme), env);

      expect(theme).toEqual({
        colors: expect.objectContaining({
          gray: myraColors.gray.light,
          background: 'gray.1',
        }),
        fontSize: expect.objectContaining({
          tiny: expect.any(String),
        }),
        lineHeight: expect.objectContaining({
          tiny: expect.any(String),
        }),
        width: expect.objectContaining({
          divider: expect.any(String),
        }),
        height: expect.objectContaining({
          divider: expect.any(String),
        }),
        radius: expect.objectContaining({
          small: expect.any(String),
        }),
        boxShadow: expect.objectContaining({
          small: expect.any(String),
        }),
        borderWidth: expect.objectContaining({
          small: expect.any(String),
        }),
        opacity: expect.objectContaining({
          hover: expect.any(String),
        }),
        minWidth: expect.objectContaining({}),
        minHeight: expect.objectContaining({}),
        spacing: expect.objectContaining({
          unit: 4,
          'unit-1': '0.25rem',
        }),
      });
    });
  });
});
