import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconUxCircle = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M7 10v2a2 2 0 1 0 4 0v-2" />
      <path d="M14 10l3 4" />
      <path d="M14 14l3 -4" />
    </>
  ),
  displayName: 'IconUxCircle',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
