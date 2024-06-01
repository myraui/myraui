import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTextColor = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 15v-7a3 3 0 0 1 6 0v7" />
      <path d="M9 11h6" />
      <path d="M5 19h14" />
    </>
  ),
  displayName: 'IconTextColor',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
