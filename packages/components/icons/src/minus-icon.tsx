import { createIconVariants } from '@myraui/icon';
import React from 'react';

export const MinusIcon = createIconVariants(
  {
    outline: {
      path: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </>
      ),
      displayName: 'MinusIcon',
      viewBox: '0 0 24 24',
      defaultProps: { fill: 'none', stroke: 'currentColor', 'aria-hidden': true },
    },
    solid: {
      path: (
        <>
          <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </>
      ),
      displayName: 'MinusIconSolid',
      viewBox: '0 0 24 24',
      defaultProps: { fill: 'currentColor', 'aria-hidden': true },
    },
  },
  'outline'
);
