import type { IconsVariantProps } from "@myraui/theme";
import { HTMLMyraProps } from "@myraui/system";
import { icons } from "@myraui/theme";
import { mapPropsVariants, useDOMRef } from "@myraui/react-utils";
import { useMemo, Ref } from "react";

interface Props extends HTMLMyraProps<"div"> {
  /**
  * Ref to the DOM node.
  */
  ref?: Ref<HTMLElement | null>;
}

export type UseIconsProps = Props & IconsVariantProps;

export function useIcons(originalProps: UseIconsProps) {
  const {props, variantProps} = mapPropsVariants(originalProps, icons.variantKeys);

  const {ref, as, className, ...otherProps} = props;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  const styles = useMemo(() => icons({ ...variantProps, className, }), [...Object.values(variantProps), className]);

  return {Component, styles, domRef, ...otherProps};
}

export type UseIconsReturn = ReturnType<typeof useIcons>;