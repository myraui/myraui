import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowBarToRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 12l-10 0" />
      <path d="M14 12l-4 4" />
      <path d="M14 12l-4 -4" />
      <path d="M20 4l0 16" />
    </>
  ),
  displayName: 'IconArrowBarToRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
