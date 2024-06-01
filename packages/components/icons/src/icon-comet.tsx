import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconComet = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15.5 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" />
      <path d="M4 4l7 7" />
      <path d="M9 4l3.5 3.5" />
      <path d="M4 9l3.5 3.5" />
    </>
  ),
  displayName: 'IconComet',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
