import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconConfucius = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 19l3 2v-18" />
      <path d="M4 10l8 -2" />
      <path d="M4 18l8 -10" />
      <path d="M20 18l-8 -8l8 -4" />
    </>
  ),
  displayName: 'IconConfucius',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
