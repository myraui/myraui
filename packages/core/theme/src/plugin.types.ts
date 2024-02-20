import { ColorMode } from '@myra-ui/colors';
import { ConfigThemes, SemanticTokens } from './theme.types';

export type MyraUIPluginConfig = {
  prefix?: string;
  themes?: ConfigThemes;
  semanticTokens?: SemanticTokens;
  defaultExtendTheme?: ColorMode;
};
