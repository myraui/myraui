import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowRampLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 3l0 8.707" />
      <path d="M13 7l4 -4l4 4" />
      <path d="M7 14l-4 -4l4 -4" />
      <path d="M17 21a11 11 0 0 0 -11 -11h-3" />
    </>
  ),
  displayName: 'IconArrowRampLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
