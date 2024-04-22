import * as RE from 'fp-ts/ReaderEither';
import { ConfigTheme } from '../theme.types';
import { ConfigThemeGenerator, ConfigThemeGeneratorKeys } from './generators';

export const identityGenerator = <K extends ConfigThemeGeneratorKeys, J extends ConfigThemeGeneratorKeys = K>(key: K): ConfigThemeGenerator<J> => {
  return (value: ConfigTheme[J]) => RE.right({ [key]: value });
};
