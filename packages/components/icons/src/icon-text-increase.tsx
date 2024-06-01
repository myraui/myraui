import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTextIncrease = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 19v-10.5a3.5 3.5 0 1 1 7 0v10.5" />
      <path d="M4 13h7" />
      <path d="M18 9v6" />
      <path d="M21 12h-6" />
    </>
  ),
  displayName: 'IconTextIncrease',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
