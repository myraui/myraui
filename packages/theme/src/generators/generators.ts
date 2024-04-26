import { Exception } from '@myraui/utils';
import { FullConfigTheme, GeneratedConfigTheme, ThemeEnv } from '../theme.types';
import * as RE from 'fp-ts/ReaderEither';
import { spacingUnitGenerator } from './spacing-unit-generator';
import { colorGenerator } from './color-generator';

export type ConfigThemeGeneratorKeys = keyof Omit<FullConfigTheme, 'extend'>;

export type ConfigThemeGenerator<K extends ConfigThemeGeneratorKeys> = (
  value: FullConfigTheme[K]
) => RE.ReaderEither<ThemeEnv, Exception, Partial<GeneratedConfigTheme>>;

export type ConfigThemeGenerators = {
  [K in ConfigThemeGeneratorKeys]?: ConfigThemeGenerator<K>;
};

export const generators: ConfigThemeGenerators = {
  spacingUnit: spacingUnitGenerator,
  colors: colorGenerator,
};
