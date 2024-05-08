import {forwardRef} from "@myraui/system";
import { UseIconsProps, useIcons } from "./use-icons";
import React from 'react';

export interface IconsProps extends UseIconsProps {}

const Icons = forwardRef<"div", IconsProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useIcons({...props, ref});

  return (
  <Component ref={domRef} className={styles} {...otherProps}>
    {children}
  </Component>
  );
});

Icons.displayName = "MyraUI.Icons";

export default Icons;
