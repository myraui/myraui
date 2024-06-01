import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyRupee = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 5h-11h3a4 4 0 0 1 0 8h-3l6 6" />
      <path d="M7 9l11 0" />
    </>
  ),
  displayName: 'IconCurrencyRupee',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
