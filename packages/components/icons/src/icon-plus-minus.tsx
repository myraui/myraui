import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPlusMinus = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 7h6" />
      <path d="M7 4v6" />
      <path d="M20 18h-6" />
      <path d="M5 19l14 -14" />
    </>
  ),
  displayName: 'IconPlusMinus',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
