import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTrendingDown2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 6h5l7 10h6" />
      <path d="M18 19l3 -3l-3 -3" />
    </>
  ),
  displayName: 'IconTrendingDown2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
