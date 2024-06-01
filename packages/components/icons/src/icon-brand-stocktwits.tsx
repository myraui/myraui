import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandStocktwits = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 3l-8 4.5l8 4.5" />
      <path d="M8 12l8 4.5l-8 4.5" />
    </>
  ),
  displayName: 'IconBrandStocktwits',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
