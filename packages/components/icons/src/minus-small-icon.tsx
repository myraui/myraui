import { createIconVariants } from '@myraui/icon';
import React from 'react';

export const MinusSmallIcon = createIconVariants(
  {
    outline: {
      path: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
        </>
      ),
      displayName: 'MinusSmallIcon',
      viewBox: '0 0 24 24',
      defaultProps: { fill: 'none', stroke: 'currentColor', 'aria-hidden': true },
    },
    solid: {
      path: (
        <>
          <path fillRule="evenodd" d="M5.25 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </>
      ),
      displayName: 'MinusSmallIconSolid',
      viewBox: '0 0 24 24',
      defaultProps: { fill: 'currentColor', 'aria-hidden': true },
    },
  },
  'outline'
);
