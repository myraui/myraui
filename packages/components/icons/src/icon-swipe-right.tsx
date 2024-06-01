import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSwipeRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 12a4 4 0 1 1 8 0a4 4 0 0 1 -8 0z" />
      <path d="M12 12h8" />
      <path d="M17 15l3 -3l-3 -3" />
    </>
  ),
  displayName: 'IconSwipeRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
