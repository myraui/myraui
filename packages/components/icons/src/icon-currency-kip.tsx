import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyKip = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 12h12" />
      <path d="M9 5v14" />
      <path d="M16 19a7 7 0 0 0 -7 -7a7 7 0 0 0 7 -7" />
    </>
  ),
  displayName: 'IconCurrencyKip',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
