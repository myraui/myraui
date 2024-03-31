import styled from '@emotion/styled';
import React, { useMemo } from 'react';
import { buildComponentTheme, buildCSSVariables } from '../theme';
import { useMyraUIContext } from './context';
import { As, MyraComponent, MyraProps } from './system.types';

function applyComponentTheme(prefix: string) {
  return (props: MyraProps) => {
    const vars = buildComponentTheme(prefix, {
      ...(props.componentTheme || {}),
      colors: props.themeColors,
    });

    return buildCSSVariables(vars);
  };
}

const getDisplayName = (Component: any) => {
  if (typeof Component === 'string') return Component;
  return Component?.displayName || Component?.name || 'Component';
};

export function styledFn<T extends As, P extends object = object>(Dynamic: any) {
  const Comp = React.forwardRef<any, any>(function Comp(props, ref) {
    const { prefix } = useMyraUIContext();

    const { as: Element = Dynamic.__el || Dynamic, children, ...restProps } = props;

    const assign = (el: any) => {
      Object.assign(el, {
        displayName: `myra.${getDisplayName(Dynamic)}`,
        __el: Dynamic,
      });
    };

    const element = useMemo(
      () => styled(Element as React.ComponentType<any>)(applyComponentTheme(prefix)),
      [Element]
    ) as unknown as React.ComponentType<any>;

    assign(element);

    return React.createElement(
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
