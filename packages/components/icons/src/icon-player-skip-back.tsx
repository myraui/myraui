import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPlayerSkipBack = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 5v14l-12 -7z" />
      <path d="M4 5l0 14" />
    </>
  ),
  displayName: 'IconPlayerSkipBack',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
