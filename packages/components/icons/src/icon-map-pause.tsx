import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMapPause = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 19l-4 -2l-6 3v-13l6 -3l6 3l6 -3v9" />
      <path d="M9 4v13" />
      <path d="M15 7v6.5" />
      <path d="M17 17v5" />
      <path d="M21 17v5" />
    </>
  ),
  displayName: 'IconMapPause',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
