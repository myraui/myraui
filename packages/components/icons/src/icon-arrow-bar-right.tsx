import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowBarRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 12l-10 0" />
      <path d="M20 12l-4 4" />
      <path d="M20 12l-4 -4" />
      <path d="M4 4l0 16" />
    </>
  ),
  displayName: 'IconArrowBarRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
