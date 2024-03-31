/**
 * Part of this code is taken from @chakra-ui/system ❤️
 */

import { Assign, Dict } from '@myra-ui/utilities';
import { ComponentPropsWithoutRef, ElementType, FunctionComponent } from 'react';
import { ComponentTheme } from '../theme';

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
  themeColors?: ComponentTheme['colors'];
  componentTheme?: ComponentTheme;
}

export type HTMLMyraProps<T extends As, P extends Dict> = ComponentPropsWithoutRef<T> & PolymorphicProps<T> & Assign<MyraProps, P>;

export type MyraComponent<T extends As, P extends Dict = Dict> = FunctionComponent<HTMLMyraProps<T, P> & { ref?: unknown }>;
