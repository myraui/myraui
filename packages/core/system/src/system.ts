import { buildColorSchemeClasses } from '@myraui/theme';
import { pipe } from 'fp-ts/function';
import React, { createElement, useMemo } from 'react';
import { useMyraUIContext } from './context';
import { As, MyraComponent, MyraProps, MyraUIStyledOptions } from './system.types';
import { forwardRef } from './forwardRef';
import { clsx } from '@myraui/shared-utils';

export function getDisplayName(Component: any) {
  if (typeof Component === 'string') return Component;
  return Component?.displayName || Component?.name || 'Component';
}

export function assignDisplayName(Component: any) {
  return <T extends object>(el: T): T => {
    Object.assign(el, {
      displayName: `myra.${getDisplayName(Component)}`,
      __el: Component,
    });
    return el;
  };
}

export function colorSchemed<T extends MyraProps>(Component: React.ComponentType<T>) {
  return forwardRef<any, any>(({ colorScheme, ...props }, ref) => {
    const colorSchemeClass = useMemo(() => {
      if (!colorScheme) return '';
      return buildColorSchemeClasses(colorScheme);
    }, [colorScheme]);

    return createElement(Component, { ...props, ref, className: clsx(colorSchemeClass, props.className) });
  });
}

export function useCreateStyledComponent(Component: any, _options: MyraUIStyledOptions = {}) {
  const { prefix } = useMyraUIContext();

  return useMemo(() => {
    return pipe(colorSchemed(Component), assignDisplayName(Component));
  }, [Component, prefix]);
}

export function styledFn<T extends As, P extends object = object>(Component: any, options: MyraUIStyledOptions = {}) {
  const Comp = forwardRef<any, any>(function Comp(props, ref) {
    const { as: Element = Component.__el || Component, children, ...restProps } = props;

    const element = useCreateStyledComponent(Element, options);

    return createElement(element, { ref, ...restProps }, children);
  });

  return React.memo(Comp as MyraComponent<T, P>);
}
