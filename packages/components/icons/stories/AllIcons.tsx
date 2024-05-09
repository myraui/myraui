import React from 'react';
import * as icons from '../src';

export const AllIcons: React.FC<AllIconsProps> = (props) => {
  return (
    <div className="flex gap-4 flex-wrap justify-between">
      {Object.entries(icons).map(([name, Icon]) => (
        <div key={name} className="flex gap-4 flex-col items-center border-tiny rounded-medium py-4 px-8">
          <Icon size="huge" />
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
};

export interface AllIconsProps {}
