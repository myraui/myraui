import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCircleChevronsLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 15l-3 -3l3 -3" />
      <path d="M11 15l-3 -3l3 -3" />
      <path d="M21 12a9 9 0 1 0 0 .265l0 -.265z" />
    </>
  ),
  displayName: 'IconCircleChevronsLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
