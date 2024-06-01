import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconStatusChange = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M6 12v-2a6 6 0 1 1 12 0v2" />
      <path d="M15 9l3 3l3 -3" />
    </>
  ),
  displayName: 'IconStatusChange',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
