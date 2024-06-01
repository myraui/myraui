import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyMonero = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h3v-11l6 7l6 -7v11h3" />
    </>
  ),
  displayName: 'IconCurrencyMonero',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
