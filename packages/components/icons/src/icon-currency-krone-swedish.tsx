import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyKroneSwedish = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 6v12" />
      <path d="M5 12c3.5 0 6 -3 6 -6" />
      <path d="M5 12c3.5 0 6 3 6 6" />
      <path d="M15 10v8" />
      <path d="M19 10a4 4 0 0 0 -4 4" />
    </>
  ),
  displayName: 'IconCurrencyKroneSwedish',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
