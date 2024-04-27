import { tv as tvBase, TV } from 'tailwind-variants';

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
      },
      classGroups: {
        ...config?.twMergeConfig?.classGroups,
        'font-size': [{ text: tokenUnits }],
      },
    },
  });
