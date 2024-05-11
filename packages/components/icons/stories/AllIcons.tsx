import React from 'react';
import * as icons from '../src';

function pascalCaseToTitleCase(str: string) {
  return str.replace(/([A-Z])/g, ' $1').trim();
}

export const AllIcons: React.FC<AllIconsProps> = (props) => {
  return (
    <div className="grid xl:grid-cols-5 grid-cols-4 gap-4">
      {Object.entries(icons).map(([name, Icon]) => {
        return (
          <div key={name} className="flex gap-4 flex-col items-center border-tiny border-divider rounded-medium py-4 px-8 text-center justify-center">
            <div className="flex gap-4">
              <Icon size="large" />
              <Icon size="large" variant="solid" />
            </div>
            <span className="!text-small">{pascalCaseToTitleCase(name.replace('Icon', ''))}</span>
          </div>
        );
      })}
    </div>
  );
};

export interface AllIconsProps {}
