import { FrontMatter } from '@/types';

export const MDX_COMPONENTS_DATA: Record<string, FrontMatter> = {
  Button: {
    title: 'Button',
    slug: '/components/button',
    package: '@myra/components',
    description: 'Buttons allow users to take actions, and make choices, with a single tap.',
    componentPrefix: 'Button',
    import: "import { Button } from '@myra/components';",
    source: '@myra/components/src/button/button.tsx',
    docs: 'components/button/page.mdx',
  },
};
