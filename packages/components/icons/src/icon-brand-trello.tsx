import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandTrello = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M7 7h3v10h-3z" />
      <path d="M14 7h3v6h-3z" />
    </>
  ),
  displayName: 'IconBrandTrello',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
