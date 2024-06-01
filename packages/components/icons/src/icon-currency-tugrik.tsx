import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyTugrik = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 6h10" />
      <path d="M12 6v13" />
      <path d="M8 17l8 -3" />
      <path d="M16 10l-8 3" />
    </>
  ),
  displayName: 'IconCurrencyTugrik',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
