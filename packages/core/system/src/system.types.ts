/**
 * Part of this code is taken from @chakra-ui/system ❤️
 */

import { Assign, Dict } from '@myraui/shared-utils';
import { ComponentColorScheme } from '@myraui/theme';
import React, { ElementType, FunctionComponent } from 'react';

export type OmitCommonProps<Target, OmitAdditionalProps extends keyof any = never> = Omit<
  Target,
  'transition' | 'as' | 'color' | OmitAdditionalProps
>;

export type RightJoinProps<SourceProps extends object = Dict, OverrideProps extends object = Dict> = OmitCommonProps<
  SourceProps,
  keyof OverrideProps
> &
  OverrideProps;

export type MergeWithAs<ComponentProps extends object, AsProps extends object, AdditionalProps extends object = Dict, AsComponent extends As = As> = (
  | RightJoinProps<ComponentProps, AdditionalProps>
  | RightJoinProps<AsProps, AdditionalProps>
) & {
  as?: AsComponent;
};

export type InternalForwardRefRenderFunction<Component extends As, Props extends object = Dict, OmitKeys extends keyof any = never> = {
  <AsComponent extends As = Component>(
    props: MergeWithAs<React.ComponentPropsWithoutRef<Component>, Omit<React.ComponentPropsWithoutRef<AsComponent>, OmitKeys>, Props, AsComponent>
  ): React.ReactElement | null;
  readonly $$typeof: symbol;
  defaultProps?: Partial<Props> | undefined;
  propTypes?: React.WeakValidationMap<Props> | undefined;
  displayName?: string | undefined;
};

/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};

export interface MyraUIStyledOptions {}

export type As = ElementType;

export interface PolymorphicProps {
  as?: As;
  asChild?: boolean;
}

export type DOMElements = keyof JSX.IntrinsicElements;

export type HTMLMyraComponents = {
  [Tag in DOMElements]: MyraComponent<Tag>;
};

export interface MyraProps {
  colorScheme?: ComponentColorScheme;
}

export type HTMLMyraProps<T extends As = 'div'> = PropsOf<T> & PolymorphicProps & MyraProps;

export type MyraComponent<T extends As = 'div', Props = Dict> = FunctionComponent<Assign<HTMLMyraProps<T>, Props> & { ref?: unknown }>;
