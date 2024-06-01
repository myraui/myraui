import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCoinRupee = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M15 8h-6h1a3 3 0 0 1 0 6h-1l3 3" />
      <path d="M9 11h6" />
    </>
  ),
  displayName: 'IconCoinRupee',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
