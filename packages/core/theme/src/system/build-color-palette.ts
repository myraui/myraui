import { ColorMode, ResolvedColorPalette } from './theming-types';
import chroma from 'chroma-js';

function createHslColor(color: chroma.Color) {
  return `${(color.get('hsl.h') || 0).toFixed(0)} ${(color.get('hsl.s') * 100).toFixed(1)}% ${(color.get('hsl.l') * 100).toFixed(1)}%`;
}

function generateCss(colorPalette: Partial<ResolvedColorPalette>, colorMode: ColorMode) {
  return Object.entries(colorPalette).reduce((acc, [key, palette]) => {
    const paletteCss = Object.keys(palette).reduce((acc: string, paletteKey: unknown) => {
      const color = palette[paletteKey as keyof typeof palette];

      const colorCss = `--${key}${paletteKey ? '-' : ''}${paletteKey}: ${createHslColor(color[colorMode])};`;
      return `${acc}\n${colorCss}`;
    }, '');

    return `${acc}\n${paletteCss}`;
  }, '');
}

/**
 * Generates CSS from a ColorPalette
 * @param colorPalette
 * @param selector
 */
export function buildColorPalette(colorPalette: Partial<ResolvedColorPalette>, selector = '') {
  const darkCss = generateCss(colorPalette, 'dark');
  const lightCss = generateCss(colorPalette, 'light');

  if (!selector) {
    return `
       ${lightCss}
      .dark & {
        ${darkCss}
      }
    `;
  }

  return `
    ${selector} {
      ${lightCss}
    }
    ${selector}.dark {
      ${darkCss}
    }
  `;
}
