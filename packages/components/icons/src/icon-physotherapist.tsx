import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPhysotherapist = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 15l-1 -3l4 -2l4 1h3.5" />
      <path d="M4 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M12 6m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M12 17v-7" />
      <path d="M8 20h7l1 -4l4 -2" />
      <path d="M18 20h3" />
    </>
  ),
  displayName: 'IconPhysotherapist',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
