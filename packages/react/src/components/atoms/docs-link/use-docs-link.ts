import type { DocsLinkSlots, DocsLinkVariantProps } from './docs-link.theme';
import { docsLinkTheme } from './docs-link.theme';
import { useMemo } from 'react';
import { Link, LinkProps, mapPropsVariants, SlotsToClasses, PropGetter } from '@nextui-org/react';
import clsx from 'clsx';
import { objectToDeps } from '@myraui/shared-utils';

interface Props extends LinkProps {
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <DocsLink classNames={{
   *    base: "base-classes", // docs-link wrapper
   *    content: "content-classes", // children wrapper
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<DocsLinkSlots>;
}

export type UseDocsLinkProps = Props & DocsLinkVariantProps;

export function useDocsLink(originalProps: UseDocsLinkProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, docsLinkTheme.variantKeys);

  const { as, className, classNames, children, ...otherProps } = props;

  const Component = as || Link;

  const slots = useMemo(
    () =>
      docsLinkTheme({
        ...variantProps,
        withHash: Boolean(props.href?.startsWith('#')),
      }),
    [objectToDeps(variantProps), props.href]
  );

  const baseStyles = clsx(classNames?.base, className);

  const getDocsLinkProps: PropGetter = (props = {}) => {
    return {
      className: slots.base({ class: clsx(baseStyles, props?.className) }),
      ['data-topic']: props.href?.substring(1),
      ...otherProps,
    };
  };

  return { Component, slots, children, classNames, getDocsLinkProps };
}

export type UseDocsLinkReturn = ReturnType<typeof useDocsLink>;
