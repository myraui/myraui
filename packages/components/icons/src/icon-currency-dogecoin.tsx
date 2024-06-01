import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyDogecoin = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 12h6" />
      <path d="M9 6v12" />
      <path d="M6 18h6a6 6 0 1 0 0 -12h-6" />
    </>
  ),
  displayName: 'IconCurrencyDogecoin',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
