import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyLira = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 5v15a7 7 0 0 0 7 -7" />
      <path d="M6 15l8 -4" />
      <path d="M14 7l-8 4" />
    </>
  ),
  displayName: 'IconCurrencyLira',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
