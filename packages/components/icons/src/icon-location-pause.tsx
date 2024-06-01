import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLocationPause = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13.02 20.04l-3.02 -6.04l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.634 10.062" />
      <path d="M17 17v5" />
      <path d="M21 17v5" />
    </>
  ),
  displayName: 'IconLocationPause',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
