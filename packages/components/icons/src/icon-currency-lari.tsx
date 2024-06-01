import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyLari = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 13a6 6 0 1 0 -6 6" />
      <path d="M6 19h12" />
      <path d="M10 5v7" />
      <path d="M14 12v-7" />
    </>
  ),
  displayName: 'IconCurrencyLari',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
