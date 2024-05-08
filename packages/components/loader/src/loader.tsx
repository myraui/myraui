import { forwardRef } from '@myraui/system';
import { useLoader, UseLoaderProps } from './use-loader';
import React from 'react';

export interface LoaderProps extends UseLoaderProps {}

const Loader = forwardRef<'div', LoaderProps>((originalProps, ref) => {
  const {
    Component,
    slots,
    classNames,
    componentProps: { label, ...props },
  } = useLoader({ ...originalProps, ref });

  return (
    <Component {...props}>
      <div className={slots.wrapper({ className: classNames?.wrapper })}>
        <i className={slots.path1({ className: classNames?.path1 })}></i>
        <i className={slots.path2({ className: classNames?.path2 })}></i>
        <i className={slots.path3({ className: classNames?.path3 })}></i>
        <i className={slots.path4({ className: classNames?.path4 })}></i>
        <i className={slots.path5({ className: classNames?.path5 })}></i>
      </div>
      {label && <span className={slots.label({ className: classNames?.label })}>{label}</span>}
    </Component>
  );
});

Loader.displayName = 'MyraUI.Loader';

export default Loader;
