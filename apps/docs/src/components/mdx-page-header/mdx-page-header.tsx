import React from 'react';
import { FrontMatter } from '@/types';

export const MdxPageHeader: React.FC<MdxPageHeaderProps> = ({ meta }) => {
  return (
    <div>
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>
    </div>
  );
};

interface MdxPageHeaderProps {
  meta: FrontMatter;
}
