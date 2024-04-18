import { ColorPalette, ColorValueFunction, flattenColorPalette, ResolvedValue, resolveThemeColors } from '@myraui/theme';
import { Dict, Exception, mergeObjects, toValues } from '@myraui/utils';
import { pipe } from 'fp-ts/function';
import * as R from 'fp-ts/Record';
import * as RE from 'fp-ts/ReaderEither';
import { PluginEnv } from '../plugin.types';
import { colorPaletteResolver } from './color-palette-resolver';

export function generateThemeColorPalette(colors: ColorPalette): RE.ReaderEither<PluginEnv, Exception, Dict<ResolvedValue<ColorValueFunction>>> {
  return pipe(
    resolveThemeColors(colors || {}),
    flattenColorPalette,
    R.mapWithIndex(colorPaletteResolver),
    R.sequence(RE.Applicative),
    RE.map(toValues),
    RE.map(mergeObjects)
  );
}
