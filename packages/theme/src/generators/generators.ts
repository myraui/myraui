import { Exception } from '@myraui/utils';
import { FullConfigTheme, GeneratedConfigTheme, ThemeEnv } from '../theme.types';
import * as RE from 'fp-ts/ReaderEither';
import { spacingUnitGenerator } from './spacing-unit-generator';
import { identityGenerator } from './identity-generator';

export type ConfigThemeGeneratorKeys = keyof Omit<FullConfigTheme, 'extend'>;

export type ConfigThemeGenerator<K extends ConfigThemeGeneratorKeys> = (
  value: FullConfigTheme[K]
) => RE.ReaderEither<ThemeEnv, Exception, Partial<GeneratedConfigTheme>>;

export type ConfigThemeGenerators = {
  [K in ConfigThemeGeneratorKeys]: ConfigThemeGenerator<K>;
};

export const generators: ConfigThemeGenerators = {
  spacingUnit: spacingUnitGenerator,
  colors: identityGenerator('colors'),
  fontSize: identityGenerator('fontSize'),
  lineHeight: identityGenerator('lineHeight'),
  width: identityGenerator('width'),
  height: identityGenerator('height'),
  radius: identityGenerator('radius'),
  boxShadow: identityGenerator('boxShadow'),
  borderWidth: identityGenerator('borderWidth'),
  opacity: identityGenerator('opacity'),
  minWidth: identityGenerator('minWidth'),
  minHeight: identityGenerator('minHeight'),
  spacing: identityGenerator('spacing'),
};
