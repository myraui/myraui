/**
 * Part of this code is taken from @chakra-ui/system ❤️
 */

import { ComponentColorScheme } from '@myraui/theme';
import { Assign, Dict } from '@myraui/shared-utils';
import { ComponentPropsWithoutRef, ElementType, FunctionComponent } from 'react';

export interface MyraUIStyledOptions {}

export type As = ElementType;

export interface PolymorphicProps<T extends As = As> {
  as?: T;
  asChild?: boolean;
}

export type DOMElements = keyof JSX.IntrinsicElements;

export type HTMLMyraComponents = {
  [Tag in DOMElements]: MyraComponent<Tag>;
};

export interface MyraProps {
  colorScheme?: ComponentColorScheme;
}

export type HTMLMyraProps<T extends As, P extends Dict> = ComponentPropsWithoutRef<T> & PolymorphicProps<T> & MyraProps & P;

export type MyraComponent<T extends As, P extends Dict = Dict> = FunctionComponent<HTMLMyraProps<T, P> & { ref?: unknown }>;
