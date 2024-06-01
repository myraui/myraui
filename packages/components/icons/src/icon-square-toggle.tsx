import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSquareToggle = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2l0 20" />
      <path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />
      <path d="M20 6a2 2 0 0 0 -2 -2" />
      <path d="M18 20a2 2 0 0 0 2 -2" />
      <path d="M20 10l0 4" />
    </>
  ),
  displayName: 'IconSquareToggle',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
