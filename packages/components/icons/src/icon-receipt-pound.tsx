import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconReceiptPound = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
      <path d="M15 9a2 2 0 1 0 -4 0v4a2 2 0 0 1 -2 2h6" />
      <path d="M9 12h4" />
    </>
  ),
  displayName: 'IconReceiptPound',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
