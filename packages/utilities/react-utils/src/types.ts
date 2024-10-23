import { Merge } from '@myraui/shared-utils';
import React from 'react';

type DataAttributes = {
  [dataAttr: string]: any;
};

export type DOMAttributes<T = Element> = Merge<React.DOMAttributes<T>, React.AriaAttributes> &
  DataAttributes & {
    id?: string;
    role?: React.AriaRole;
    tabIndex?: number;
    style?: React.CSSProperties;
  };

export interface RefAttributes<T> extends React.Attributes {
  ref?: React.Ref<T>;
}

export type PropGetter<P = Record<string, unknown>, R = DOMAttributes> = (
  props?: Merge<DOMAttributes, P>,
  ref?: React.Ref<any>
) => R & RefAttributes<any>;
