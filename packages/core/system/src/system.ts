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

export function withColorScheme<T extends MyraProps>(Component: React.ComponentType<T> | As) {
  return forwardRef<any, any>(({ colorScheme, ...props }, ref) => {
    const colorSchemeClass = useMemo(() => {
      if (!colorScheme) return '';
      return buildColorSchemeClasses(colorScheme);
    }, [colorScheme]);

    const elementProps = useMemo(() => {
      const baseProps = {
        ...props,
        ref,
        className: clsx(colorSchemeClass, props.className),
      };

      if (typeof Component === 'string') {
        return baseProps;
      }

      return { ...baseProps, colorScheme };
    }, [props, ref, colorSchemeClass, colorScheme]);

    return createElement(Component, { ...elementProps });
  });
}

export function useCreateStyledComponent(Component: any, _options: MyraUIStyledOptions = {}) {
  const { prefix } = useMyraUIContext();

  return useMemo(() => {
    return pipe(withColorScheme(Component), assignDisplayName(Component));
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
