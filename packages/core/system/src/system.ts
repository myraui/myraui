import { As, ColorPalette, MyraComponent, MyraProps } from './system.types';
import React from 'react';
import { buildColorPalette } from './utils/theme';
import createStyled from '@emotion/styled';
import { useMyraUIContext } from './context';

const emotion_styled = ((createStyled as any).default ?? createStyled) as typeof createStyled;

export interface MyraUIStyledOptions {
  palette: ColorPalette;
}

function applyColorPalette(props: MyraProps & { cssVariablePrefix: string }) {
  return buildColorPalette({ action: props.actionColor, neutral: props.neutralColor, foreground: props.foregroundColor }, props.cssVariablePrefix);
}

export function styled<T extends As, P extends object = object>(component: T, options?: MyraUIStyledOptions) {
  const Component = emotion_styled(component as React.ComponentType<any>)(applyColorPalette);

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
