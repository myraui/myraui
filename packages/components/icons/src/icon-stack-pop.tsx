import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconStackPop = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 9.5l-3 1.5l8 4l8 -4l-3 -1.5" />
      <path d="M4 15l8 4l8 -4" />
      <path d="M12 11v-7" />
      <path d="M9 7l3 -3l3 3" />
    </>
  ),
  displayName: 'IconStackPop',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
