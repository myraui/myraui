import { ColorMode, ColorName, ColorScale } from '@myra-ui/colors';
import React from 'react';

type Assign<T, U> = Omit<T, keyof U> & U;

export type Theme = string | ColorMode;

export type ThemedProperty<K, T extends Theme = Theme> = K | Record<T, K>;

export type ColorPaletteKeys = 'neutral' | 'action' | 'foreground';

export type ThemeColorKey = ColorName | ColorPaletteKeys;

export type ThemedColor = ThemedProperty<ThemeColorKey> | ThemedProperty<string>;

export type ColorPalette = Record<ColorPaletteKeys, ThemedColor>;

export type ResolvedColorPalette = Record<ColorPaletteKeys, ColorScale>;

export type ThemeColorValue = ColorScale | ThemeColorKey | string;

export type ThemeColors = Record<ThemeColorKey, ThemeColorValue> | Record<string, ThemeColorValue>;

export type ConfigTheme = {
  colorMode?: ColorMode;
  colors?: ThemeColors;
};

export type ConfigThemes = Record<string, ConfigTheme>;

export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};

export type DOMElements = keyof JSX.IntrinsicElements;

export type HTMLMyraComponents = {
  [Tag in DOMElements]: MyraComponent<Tag>;
};

export type As = React.ElementType;

export type OmitCommonProps<Target, OmitAdditionalProps extends keyof any = never> = Omit<Target, 'as' | OmitAdditionalProps> & {};

export type RightJoinProps<SourceProps extends object = {}, OverrideProps extends object = {}> = OmitCommonProps<SourceProps, keyof OverrideProps> &
  OverrideProps;

export type MergeWithAs<ComponentProps extends object, AsProps extends object, AdditionalProps extends object = {}, AsComponent extends As = As> = (
  | RightJoinProps<ComponentProps, AdditionalProps>
  | RightJoinProps<AsProps, AdditionalProps>
) & {
  as?: AsComponent;
};

export type ComponentWithAs<Component extends As, Props extends object = {}> = {
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
  neutralColor?: ThemedColor;
  actionColor?: ThemedColor;
  foregroundColor?: ThemedColor;
  resolvedColorPalette?: (theme: Theme) => (palette: ResolvedColorPalette) => void;
}

export interface MyraComponent<T extends As, P extends object = {}> extends ComponentWithAs<T, Assign<MyraProps, P>> {}
