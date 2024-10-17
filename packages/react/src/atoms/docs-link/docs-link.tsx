import React, { PropsWithChildren, useMemo } from 'react';
import { Link, LinkProps } from '@nextui-org/react';
import { docsLinkTheme } from '@myraui/theme';

const DocsLink: React.FC<PropsWithChildren<DocsLinkProps>> = ({ href, className, ...props }) => {
  const classes = useMemo(() => {
    return docsLinkTheme({ withHash: Boolean(href?.startsWith('#')) });
  }, [href]);

  if (!href?.startsWith('#')) {
    return <Link className={classes.base({ className })} href={href} {...props} />;
  }

  return (
    <Link {...props} className={classes.base({ className })} href={href} data-topic={href?.substring(1)}>
      {props.children}
      <span className={classes.hash()}>#</span>
    </Link>
  );
};

export interface DocsLinkProps extends LinkProps {}

export default DocsLink;
