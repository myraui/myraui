import { MDXComponents } from '@mdx-js/react/lib';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
