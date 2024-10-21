import { useDocsLink, UseDocsLinkProps } from './use-docs-link';
import React from 'react';
import { forwardRef } from '@nextui-org/react';

export interface DocsLinkProps extends UseDocsLinkProps {}

const DocsLink = forwardRef<'a', DocsLinkProps>((props, ref) => {
  const { Component, children, slots, classNames, getDocsLinkProps } = useDocsLink({ ...props, ref });

  return (
    <Component ref={ref} {...getDocsLinkProps()}>
      {children}
      <span className={slots.hash({ className: classNames?.hash })}>#</span>
    </Component>
  );
});

DocsLink.displayName = 'MyraUI.DocsLink';

export default DocsLink;
