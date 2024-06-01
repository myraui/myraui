import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandStrava = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 13l-5 -10l-5 10m6 0l4 8l4 -8" />
    </>
  ),
  displayName: 'IconBrandStrava',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
