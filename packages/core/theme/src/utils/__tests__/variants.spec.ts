import { Color } from '@myra-ui/colors';
import { SemanticRecord } from '../../theme.types';
import { SemanticColors } from '../../semantic/colors';
import { getThemeValues } from '../variants';

describe('variants', () => {
  describe('getThemeValues', () => {
    it('should work correctly', () => {
      const record: SemanticRecord<SemanticColors, Color> = {
        DEFAULT: {
          primary: 'teal',
          secondary: 'red',
          accent: 'yellow',
          text: 'gray',
          neutral: 'gray',
          danger: 'red',
          warning: 'orange',
          info: 'blue',
          success: 'green',
          overlay: 'gray',
          focus: 'blue',
          divider: 'gray',
        },
        dark: {
          text: 'whiteAlpha',
        },
      };
      const result = getThemeValues(record, 'dark');

      expect(result).toEqual({
        primary: 'teal',
        secondary: 'red',
        accent: 'yellow',
        text: 'whiteAlpha',
        neutral: 'gray',
        danger: 'red',
        warning: 'orange',
        info: 'blue',
        success: 'green',
        overlay: 'gray',
        focus: 'blue',
        divider: 'gray',
      });
    });
  });
});
