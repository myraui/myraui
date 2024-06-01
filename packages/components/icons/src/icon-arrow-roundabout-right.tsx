import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowRoundaboutRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M21 9h-8a5 5 0 1 0 -5 5v7" />
      <path d="M17 5l4 4l-4 4" />
    </>
  ),
  displayName: 'IconArrowRoundaboutRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
