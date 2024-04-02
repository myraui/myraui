import { Dict, Exception } from '@myra-ui/utilities';
import * as RE from 'fp-ts/ReaderEither';
import { PluginEnv } from '../../plugin/plugin.types';

export const getBaseStyles = (): RE.ReaderEither<PluginEnv, Exception, Dict> =>
  RE.asks(({ prefix }) => ({
    color: `hsl(var(--${prefix}-colors-foreground))`,
    backgroundColor: `hsl(var(--${prefix}-colors-background))`,
  }));
