import { Dict } from '@myraui/shared-utils';
import { As, InternalForwardRefRenderFunction, PropsOf, RightJoinProps } from './system.types';
import React, { forwardRef as baseForwardRef } from 'react';

export function forwardRef<Component extends As, Props extends Dict, OmitKeys extends keyof any = never>(
  component: React.ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props> & {
      as?: As;
    }
  >
) {
  return baseForwardRef(component) as InternalForwardRefRenderFunction<Component, Props, OmitKeys>;
}
