import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconShoppingCartCancel = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M12 17h-6v-14h-2" />
      <path d="M6 5l14 1l-.857 5.998m-3.643 1.002h-9.5" />
      <path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M17 21l4 -4" />
    </>
  ),
  displayName: 'IconShoppingCartCancel',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
