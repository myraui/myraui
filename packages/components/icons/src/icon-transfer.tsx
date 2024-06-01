import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTransfer = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 10h-16l5.5 -6" />
      <path d="M4 14h16l-5.5 6" />
    </>
  ),
  displayName: 'IconTransfer',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
