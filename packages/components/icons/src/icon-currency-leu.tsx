import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyLeu = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 18h-7a3 3 0 0 1 -3 -3v-10" />
    </>
  ),
  displayName: 'IconCurrencyLeu',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
