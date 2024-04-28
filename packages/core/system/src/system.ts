import styled from '@emotion/styled';
import { buildComponentColorScheme } from '@myraui/theme';
import { pipe } from 'fp-ts/function';
import * as R from 'fp-ts/Reader';
import * as RE from 'fp-ts/ReaderEither';
import React, { createElement, useMemo } from 'react';
import { useMyraUIContext } from './context';
import { As, MyraComponent, MyraProps, MyraUIStyledOptions } from './system.types';

function applyComponentTheme(prefix: string) {
  return (props: MyraProps) => {
    if (!props.colorScheme) return {};
    return pipe(
      buildComponentColorScheme(props.colorScheme),
      RE.getOrElse(() => R.of({}))
    )({ prefix, defaultExtendTheme: 'light' });
  };
}

const getDisplayName = (Component: any) => {
  if (typeof Component === 'string') return Component;
  return Component?.displayName || Component?.name || 'Component';
};

export function styledFn<T extends As, P extends object = object>(Dynamic: any, options: MyraUIStyledOptions = {}) {
  const Comp = React.forwardRef<any, any>(function Comp(props, ref) {
    const { prefix } = useMyraUIContext();

    const { as: Element = Dynamic.__el || Dynamic, children, ...restProps } = props;

    const assign = (el: any) => {
      Object.assign(el, {
        displayName: `myra.${getDisplayName(Dynamic)}`,
        __el: Dynamic,
      });
    };

    const element = useMemo(() => styled(Element as React.ComponentType<any>)(applyComponentTheme(prefix)), [Element]);

    assign(element);

    return createElement(
      element,
      {
        ref,
        ...restProps,
      },
      children
    );
  });

  return React.memo(Comp as MyraComponent<T, P>);
}
