import { MYRA_UI_PREFIX } from '@myraui/theme';
import { pipe } from 'fp-ts/function';
import * as RE from 'fp-ts/ReaderEither';
import plugin from 'tailwindcss/plugin.js';
import { MyraUIPluginConfig, ResolvedThemes } from './plugin.types';
import { buildThemes } from './theme/build-themes';
import { resolveThemes } from './theme/resolve-themes';

function createPlugin(resolved: ResolvedThemes) {
  return plugin(
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
  );
}

const myrauiPlugin = (config: MyraUIPluginConfig = {}): ReturnType<typeof plugin> => {
  const { themes = {}, defaultExtendTheme = 'light', prefix = MYRA_UI_PREFIX } = config;
  return pipe(
    buildThemes(themes),
    RE.chain(resolveThemes),
    RE.map(createPlugin),
    RE.getOrElse((e) => {
      throw e;
    })
  )({ prefix, defaultExtendTheme });
};

export default myrauiPlugin;
