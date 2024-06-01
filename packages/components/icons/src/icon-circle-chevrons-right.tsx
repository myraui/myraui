import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCircleChevronsRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 9l3 3l-3 3" />
      <path d="M13 9l3 3l-3 3" />
      <path d="M3 12a9 9 0 1 0 0 -.265l0 .265z" />
    </>
  ),
  displayName: 'IconCircleChevronsRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
