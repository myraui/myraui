import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowRampRight2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 3v8.707" />
      <path d="M16 14l4 -4l-4 -4" />
      <path d="M6 21c0 -6.075 4.925 -11 11 -11h3" />
    </>
  ),
  displayName: 'IconArrowRampRight2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
