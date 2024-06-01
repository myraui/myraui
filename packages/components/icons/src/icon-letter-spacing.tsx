import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterSpacing = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5" />
      <path d="M13 4l3 8l3 -8" />
      <path d="M5 18h14" />
      <path d="M17 20l2 -2l-2 -2" />
      <path d="M7 16l-2 2l2 2" />
    </>
  ),
  displayName: 'IconLetterSpacing',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
