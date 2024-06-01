import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconRouteSquare2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2" />
      <path d="M3 17h4v4h-4z" />
      <path d="M17 3h4v4h-4z" />
    </>
  ),
  displayName: 'IconRouteSquare2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
