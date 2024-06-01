import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyWon = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6l3.245 11.358a.85 .85 0 0 0 1.624 .035l3.131 -9.393l3.131 9.393a.85 .85 0 0 0 1.624 -.035l3.245 -11.358" />
      <path d="M21 10h-18" />
      <path d="M21 14h-18" />
    </>
  ),
  displayName: 'IconCurrencyWon',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
