/**
 * Part of this code is taken from @chakra-ui/system ❤️
 */

import React from 'react';
import { ComponentTheme } from '@myra-ui/theme';

type Assign<T, U> = Omit<T, keyof U> & U;

export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};

export type DOMElements = keyof JSX.IntrinsicElements;

export type HTMLMyraComponents = {
  [Tag in DOMElements]: MyraComponent<Tag>;
};

export type As = React.ElementType;

export type OmitCommonProps<Target, OmitAdditionalProps extends keyof any = never> = Omit<Target, 'as' | OmitAdditionalProps> & object;

export type RightJoinProps<SourceProps extends object = object, OverrideProps extends object = object> = OmitCommonProps<
  SourceProps,
  keyof OverrideProps
> &
  OverrideProps;

export type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = object,
  AsComponent extends As = As
> = (RightJoinProps<ComponentProps, AdditionalProps> | RightJoinProps<AsProps, AdditionalProps>) & {
  as?: AsComponent;
};

export type ComponentWithAs<Component extends As, Props extends object = object> = {
  <AsComponent extends As = Component>(
    props: MergeWithAs<React.ComponentProps<Component>, React.ComponentProps<AsComponent>, Props, AsComponent>
  ): JSX.Element;

  displayName?: string;
  propTypes?: React.WeakValidationMap<any>;
  contextTypes?: React.ValidationMap<any>;
  defaultProps?: Partial<any>;
  id?: string;
};

export interface MyraProps {
  themeColors?: ComponentTheme['colors'];
  componentTheme?: ComponentTheme;
}

export interface MyraComponent<T extends As, P extends object = object> extends ComponentWithAs<T, Assign<MyraProps, P>> {}
