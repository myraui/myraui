import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconGrid3x3 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 8h18" />
      <path d="M3 16h18" />
      <path d="M8 3v18" />
      <path d="M16 3v18" />
    </>
  ),
  displayName: 'IconGrid3x3',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
