import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyPaanga = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4" />
      <path d="M17 20v-2" />
      <path d="M18 6v-2" />
      <path d="M3 6h8" />
      <path d="M7 6v12" />
    </>
  ),
  displayName: 'IconCurrencyPaanga',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
