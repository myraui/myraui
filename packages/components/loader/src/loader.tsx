import { forwardRef } from '@myraui/system';
import { useLoader, UseLoaderProps } from './use-loader';
import React from 'react';

export interface LoaderProps extends UseLoaderProps {}

const Loader = forwardRef<'div', LoaderProps>((originalProps, ref) => {
  const { Component, styles, classNames, label, ...props } = useLoader({ ...originalProps, ref });

  return (
    <Component {...props}>
      <div className={styles.wrapper({ className: classNames?.wrapper })}>
        <i className={styles.path1({ className: classNames?.path1 })}></i>
        <i className={styles.path2({ className: classNames?.path2 })}></i>
        <i className={styles.path3({ className: classNames?.path3 })}></i>
        <i className={styles.path4({ className: classNames?.path4 })}></i>
        <i className={styles.path5({ className: classNames?.path5 })}></i>
      </div>
      {label && <span className={styles.label({ className: classNames?.label })}>{label}</span>}
    </Component>
  );
});

Loader.displayName = 'MyraUI.Loader';

export default Loader;
