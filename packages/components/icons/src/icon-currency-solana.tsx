import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencySolana = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 18h12l4 -4h-12z" />
      <path d="M8 14l-4 -4h12l4 4" />
      <path d="M16 10l4 -4h-12l-4 4" />
    </>
  ),
  displayName: 'IconCurrencySolana',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
