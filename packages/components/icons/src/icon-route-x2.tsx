import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconRouteX2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 17l4 4" />
      <path d="M7 17l-4 4" />
      <path d="M17 3l4 4" />
      <path d="M21 3l-4 4" />
      <path d="M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2" />
    </>
  ),
  displayName: 'IconRouteX2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
