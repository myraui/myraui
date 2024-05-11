import { createIconVariants } from '@myraui/icon';
import React from 'react';

export const ChevronUpIcon = createIconVariants(
  {
    outline: {
      path: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </>
      ),
      displayName: 'ChevronUpIcon',
      viewBox: '0 0 24 24',
      defaultProps: { fill: 'none', stroke: 'currentColor', 'aria-hidden': true },
    },
    solid: {
      path: (
        <>
          <path
            fillRule="evenodd"
            d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
            clipRule="evenodd"
          />
        </>
      ),
      displayName: 'ChevronUpIconSolid',
      viewBox: '0 0 24 24',
      defaultProps: { fill: 'currentColor', 'aria-hidden': true },
    },
  },
  'outline'
);
