import { As, MyraComponent, MyraProps } from './system.types';
import React from 'react';
import createStyled from '@emotion/styled';
import { useMyraUIContext } from './context';
import { buildComponentTheme, buildCSSVariables } from '@myra-ui/theme';

const emotion_styled = ((createStyled as any).default ?? createStyled) as typeof createStyled;

export interface MyraUIStyledOptions {}

function applyComponentTheme(props: MyraProps & { cssVariablePrefix: string }) {
  const vars = buildComponentTheme(props.cssVariablePrefix, {
    ...(props.componentTheme || {}),
    colors: props.themeColors,
  });

  return buildCSSVariables(vars);
}

export function styled<T extends As, P extends object = object>(component: T, options?: MyraUIStyledOptions) {
  const Component = emotion_styled(component as React.ComponentType<any>)(applyComponentTheme);

  const myraComponent = React.forwardRef(function MyraComponent(props: any, ref: any) {
    const { prefix: cssVariablePrefix } = useMyraUIContext();

    return React.createElement(Component, {
      ref: ref,
      ...props,
      cssVariablePrefix,
    });
  });

  return myraComponent as MyraComponent<T, P>;
}
