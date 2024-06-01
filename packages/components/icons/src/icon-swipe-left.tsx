import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSwipeLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 12a4 4 0 1 0 -8 0a4 4 0 0 0 8 0z" />
      <path d="M12 12h-8" />
      <path d="M7 15l-3 -3l3 -3" />
    </>
  ),
  displayName: 'IconSwipeLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
