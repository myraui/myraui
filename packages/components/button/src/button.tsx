import React from 'react';
import { myra } from '@myraui/system';
import { button } from '@myraui/theme';

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <myra.button className={button({ ...props })} {...props}>
      Button
    </myra.button>
  );
};

export interface ButtonProps {}
