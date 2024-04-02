import { pipe } from 'fp-ts/lib/function';
import * as RE from 'fp-ts/ReaderEither';
import plugin from 'tailwindcss/plugin.js';
import { ConfigThemes, MYRA_UI_PREFIX } from '../theme';
import { MyraUIPluginConfig } from './plugin.types';
import { resolveThemes } from './theme/resolve-themes';

const corePlugin = (themes: ConfigThemes = {}) => {
  return pipe(
    resolveThemes(themes),
    RE.map((resolved) =>
      plugin(
        ({ addBase, addUtilities, addVariant }) => {
          addBase({ ':root, [data-theme]': { ...resolved.baseStyles } });
          addUtilities({ ...resolved?.utilities });
          resolved?.variants.forEach((variant) => {
            addVariant(variant.name, variant.definition);
          });
        },
        {
          theme: {
            extend: {
              colors: resolved?.colors as any,
            },
          },
        }
      )
    )
  );
};

const myrauiPlugin = (config: MyraUIPluginConfig = {}): ReturnType<typeof plugin> => {
  const { themes = {}, defaultExtendTheme = 'light', prefix = MYRA_UI_PREFIX } = config;
  return pipe(
    corePlugin(themes),
    RE.getOrElse((e) => {
      throw e;
    })
  )({ prefix, defaultExtendTheme });
};

export default myrauiPlugin;
