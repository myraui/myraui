import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBluetoothX = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 8l10 8l-5 4v-16l1 .802m0 6.396l-6 4.802" />
      <path d="M16 6l4 4" />
      <path d="M20 6l-4 4" />
    </>
  ),
  displayName: 'IconBluetoothX',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
