import { forwardRef } from '@myraui/system';
import { useLoader, UseLoaderProps } from './use-loader';
import React from 'react';

export interface LoaderProps extends UseLoaderProps {}

const Loader = forwardRef<'div', LoaderProps>((props, ref) => {
  const { Component, domRef, styles, classNames, ...otherProps } = useLoader({ ...props, ref });

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      <div className={styles.wrapper({ className: classNames?.wrapper })}>
        <i className={styles.path1({ className: classNames?.path1 })}></i>
        <i className={styles.path2({ className: classNames?.path2 })}></i>
        <i className={styles.path3({ className: classNames?.path3 })}></i>
      </div>
    </Component>
  );
});

Loader.displayName = 'MyraUI.Loader';

export default Loader;
