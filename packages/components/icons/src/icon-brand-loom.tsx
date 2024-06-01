import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandLoom = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17.464 6.518a6 6 0 1 0 -3.023 7.965" />
      <path d="M17.482 17.464a6 6 0 1 0 -7.965 -3.023" />
      <path d="M6.54 17.482a6 6 0 1 0 3.024 -7.965" />
      <path d="M6.518 6.54a6 6 0 1 0 7.965 3.024" />
    </>
  ),
  displayName: 'IconBrandLoom',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
