import { createIconVariants } from '@myraui/icon';
import React from 'react';

export const ChevronDoubleUpIcon = createIconVariants(
  {
    outline: {
      path: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
        </>
      ),
      displayName: 'ChevronDoubleUpIcon',
      viewBox: '0 0 24 24',
      defaultProps: { fill: 'none', stroke: 'currentColor', 'aria-hidden': true },
    },
    solid: {
      path: (
        <>
          <path
            fillRule="evenodd"
            d="M11.47 10.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 12.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M11.47 4.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
            clipRule="evenodd"
          />
        </>
      ),
      displayName: 'ChevronDoubleUpIconSolid',
      viewBox: '0 0 24 24',
      defaultProps: { fill: 'currentColor', 'aria-hidden': true },
    },
  },
  'outline'
);
