import { tv, VariantProps } from '@nextui-org/react';

const docsLinkTheme = tv({
  slots: {
    base: '',
    hash: 'text-primary dark:text-primary-300 opacity-0 transition-opacity group-hover:opacity-100',
  },
  variants: {
    withHash: {
      true: {
        base: 'group relative flex items-center gap-2',
      },
      false: {
        base: 'text-primary dark:text-primary-300 hover:underline',
      },
    },
  },
  defaultVariants: {
    withHash: false,
  },
});

export type DocsLinkVariantProps = VariantProps<typeof docsLinkTheme>;
export type DocsLinkSlots = keyof ReturnType<typeof docsLinkTheme>;

export { docsLinkTheme };
