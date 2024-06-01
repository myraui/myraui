import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconStretching = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M5 20l5 -.5l1 -2" />
      <path d="M18 20v-5h-5.5l2.5 -6.5l-5.5 1l1.5 2" />
    </>
  ),
  displayName: 'IconStretching',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
