import React, { PropsWithChildren } from 'react';
import { Link, LinkProps } from '@nextui-org/react';

const DocsLink: React.FC<PropsWithChildren<DocsLinkProps>> = ({ href, ...props }) => {
  if (!href?.startsWith('#')) {
    return <Link className="text-primary dark:text-primary-300 hover:underline" href={href} {...props} />;
  }

  return (
    <Link {...props} className="group relative flex items-center gap-2" href={href} data-topic={href?.substring(1)}>
      {props.children}
      <span className="text-primary dark:text-primary-300 opacity-0 transition-opacity group-hover:opacity-100">#</span>
    </Link>
  );
};

export interface DocsLinkProps extends LinkProps {}

export default DocsLink;
