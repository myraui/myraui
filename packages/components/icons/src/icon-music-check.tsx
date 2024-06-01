import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMusicCheck = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M9 17v-13h10v9.5" />
      <path d="M9 8h10" />
      <path d="M15 19l2 2l4 -4" />
    </>
  ),
  displayName: 'IconMusicCheck',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
