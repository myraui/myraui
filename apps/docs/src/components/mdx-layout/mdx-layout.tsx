import React, { PropsWithChildren } from 'react';
import { FrontMatter } from '@/types';
import { MdxPageHeader } from '@/components/mdx-page-header';
import { TableOfContents } from '@/components/table-of-contents';

export const MdxLayout: React.FC<PropsWithChildren<MdxLayoutProps>> = (props) => {
  return (
    <>
      <MdxPageHeader meta={props.meta} />
      <div>
        <div className="container mx-auto bg-yellow-1">{props.children}</div>
        <div>
          <TableOfContents />
        </div>
      </div>
    </>
  );
};

export function Layout(meta: FrontMatter) {
  return function LayoutComponent({ children }: { children: React.ReactNode }) {
    return <MdxLayout meta={meta}>{children}</MdxLayout>;
  };
}

interface MdxLayoutProps {
  meta: FrontMatter;
}
