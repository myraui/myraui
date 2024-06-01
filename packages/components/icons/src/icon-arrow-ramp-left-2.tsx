import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowRampLeft2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 3v8.707" />
      <path d="M8 14l-4 -4l4 -4" />
      <path d="M18 21c0 -6.075 -4.925 -11 -11 -11h-3" />
    </>
  ),
  displayName: 'IconArrowRampLeft2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
