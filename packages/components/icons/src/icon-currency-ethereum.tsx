import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyEthereum = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 12l6 -9l6 9l-6 9z" />
      <path d="M6 12l6 -3l6 3l-6 2z" />
    </>
  ),
  displayName: 'IconCurrencyEthereum',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
