import { tv as tvBase, TV } from 'tailwind-variants';
import { MAPPED_SPACING_SCALE_KEYS } from '../generators';

const tokenUnits = ['tiny', 'small', 'medium', 'large', 'huge'];

export const tv: TV = (options, config) =>
  tvBase(options, {
    ...config,
    twMerge: config?.twMerge ?? true,
    twMergeConfig: {
      ...config?.twMergeConfig,
      theme: {
        ...config?.twMergeConfig?.theme,
        borderRadius: tokenUnits,
        borderWidth: tokenUnits,
        spacing: ['divider', 'unit', ...MAPPED_SPACING_SCALE_KEYS],
      },
      classGroups: {
        ...config?.twMergeConfig?.classGroups,
        shadow: [{ shadow: tokenUnits }],
        'font-size': [{ text: tokenUnits }],
        'min-w': [{ 'min-w': ['unit', ...MAPPED_SPACING_SCALE_KEYS] }],
        'min-h': [{ 'min-h': ['unit', ...MAPPED_SPACING_SCALE_KEYS] }],
      },
    },
  });
