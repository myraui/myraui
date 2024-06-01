import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowRoundaboutLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 9h8a5 5 0 1 1 5 5v7" />
      <path d="M7 5l-4 4l4 4" />
    </>
  ),
  displayName: 'IconArrowRoundaboutLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
