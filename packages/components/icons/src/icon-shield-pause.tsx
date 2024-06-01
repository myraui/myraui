import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconShieldPause = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13.004 20.692c-.329 .117 -.664 .22 -1.004 .308a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.081 7.034" />
      <path d="M17 17v5" />
      <path d="M21 17v5" />
    </>
  ),
  displayName: 'IconShieldPause',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
