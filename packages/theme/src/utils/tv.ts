import { tv as tvBase, TV } from 'tailwind-variants';

const commonUnits = ['small', 'medium', 'large'];

export const tv: TV = (options, config) =>
  tvBase(options, {
    ...config,
    twMerge: config?.twMerge ?? true,
    twMergeConfig: {
      ...config?.twMergeConfig,
      theme: {
        ...config?.twMergeConfig?.theme,
        borderRadius: commonUnits,
        borderWidth: commonUnits,
      },
      classGroups: {
        ...config?.twMergeConfig?.classGroups,
        'font-size': [{ text: ['tiny', ...commonUnits] }],
      },
    },
  });
