import React, { PropsWithChildren } from 'react';
import { Link, LinkProps } from '@nextui-org/react';

export const DocsLink: React.FC<PropsWithChildren<DocsLinkProps>> = ({ href, ...props }) => {
  if (!href?.startsWith('#')) {
    return <Link className="text-primary dark:text-primary-300 hover:underline" href={href} {...props} />;
  }

  return (
    <Link {...props} className="relative group flex gap-2 items-center" href={href} data-topic={href?.substring(1)}>
      {props.children}
      <span className="text-primary dark:text-primary-300 opacity-0 group-hover:opacity-100 transition-opacity">#</span>
    </Link>
  );
};

export interface DocsLinkProps extends LinkProps {}
