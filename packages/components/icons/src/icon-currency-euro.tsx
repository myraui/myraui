import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyEuro = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17.2 7a6 7 0 1 0 0 10" />
      <path d="M13 10h-8m0 4h8" />
    </>
  ),
  displayName: 'IconCurrencyEuro',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
