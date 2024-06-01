import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyZloty = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 18h-7l7 -7h-7" />
      <path d="M17 18v-13" />
      <path d="M14 14.5l6 -3.5" />
    </>
  ),
  displayName: 'IconCurrencyZloty',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
