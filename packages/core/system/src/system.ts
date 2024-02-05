import { As, ColorPalette, MyraComponent } from './system.types';
import React from 'react';
import { buildColorPalette } from './utils/theme';
import createStyled, { FunctionInterpolation } from '@emotion/styled';

const emotion_styled = ((createStyled as any).default ?? createStyled) as typeof createStyled;

export interface MyraUIStyledOptions {
  palette: ColorPalette;
}

export const toCSSObject: FunctionInterpolation<any> = (props) => {
  return buildColorPalette(
    {
      action: props.actionColor,
      neutral: props.neutralColor,
      foreground: props.foregroundColor,
    },
    'myra-ui'
  );
};

export function styled<T extends As, P extends object = {}>(component: T, options?: MyraUIStyledOptions) {
  const Component = emotion_styled(component as React.ComponentType<any>)(toCSSObject);

  const myraComponent = React.forwardRef(function MyraComponent(props: any, ref: any) {
    return React.createElement(Component, {
      ref: ref,
      ...props,
    });
  });

  return myraComponent as MyraComponent<T, P>;
}
