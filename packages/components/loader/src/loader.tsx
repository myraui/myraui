import { forwardRef, myra } from '@myraui/system';
import { useLoader, UseLoaderProps } from './use-loader';
import React from 'react';

export interface LoaderProps extends UseLoaderProps {}

const Loader = forwardRef<'div', LoaderProps>((originalProps, ref) => {
  const {
    Component,
    slots,
    componentProps: { label, labelColorScheme, ...props },
  } = useLoader({ ...originalProps, ref });

  return (
    <myra.div as={Component} {...props}>
      <div className={slots.wrapper()}>
        <i className={slots.path1()}></i>
        <i className={slots.path2()}></i>
        <i className={slots.path3()}></i>
        <i className={slots.path4()}></i>
        <i className={slots.path5()}></i>
      </div>
      {label && (
        <myra.span colorScheme={labelColorScheme} colorSchemeAsText className={slots.label()}>
          {label}
        </myra.span>
      )}
    </myra.div>
  );
});

Loader.displayName = 'MyraUI.Loader';

export default Loader;
