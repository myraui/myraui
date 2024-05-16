import styled from '@emotion/styled';
import { buildComponentColorScheme } from '@myraui/theme';
import { pipe } from 'fp-ts/function';
import * as Reader from 'fp-ts/Reader';
import * as RE from 'fp-ts/ReaderEither';
import React, { createElement, useMemo } from 'react';
import { useMyraUIContext } from './context';
import { As, MyraComponent, MyraProps, MyraUIStyledOptions } from './system.types';

export function applyComponentTheme(prefix: string) {
  return (props: MyraProps) => {
    if (!props.colorScheme) return {};
    return pipe(
      buildComponentColorScheme(props.colorScheme),
      RE.getOrElse(() => Reader.of({}))
    )({ prefix, defaultExtendTheme: 'light' });
  };
}

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

export function useCreateStyledComponent(Component: any, _options: MyraUIStyledOptions = {}) {
  const { prefix } = useMyraUIContext();

  return useMemo(() => {
    return pipe(applyComponentTheme(prefix), styled(Component as React.ComponentType<any>), assignDisplayName(Component));
  }, [Component, prefix]);
}

export function styledFn<T extends As, P extends object = object>(Component: any, options: MyraUIStyledOptions = {}) {
  const Comp = React.forwardRef<any, any>(function Comp(props, ref) {
    const { as: Element = Component.__el || Component, children, ...restProps } = props;

    const element = useCreateStyledComponent(Element, options);

    return createElement(element, { ref, ...restProps }, children);
  });

  return React.memo(Comp as MyraComponent<T, P>);
}
