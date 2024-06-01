import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyDram = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 10a6 6 0 1 1 12 0v10" />
      <path d="M12 16h8" />
      <path d="M12 12h8" />
    </>
  ),
  displayName: 'IconCurrencyDram',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
