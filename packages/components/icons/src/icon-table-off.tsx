import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTableOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 3h12a2 2 0 0 1 2 2v12m-.585 3.413a1.994 1.994 0 0 1 -1.415 .587h-14a2 2 0 0 1 -2 -2v-14c0 -.55 .223 -1.05 .583 -1.412" />
      <path d="M3 10h7m4 0h7" />
      <path d="M10 3v3m0 4v11" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconTableOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
