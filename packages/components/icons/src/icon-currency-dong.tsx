import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyDong = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 19h12" />
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M16 16v-12" />
      <path d="M17 5h-4" />
    </>
  ),
  displayName: 'IconCurrencyDong',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
