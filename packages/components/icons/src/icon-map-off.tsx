import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMapOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8.32 4.34l.68 -.34l6 3l6 -3v13m-2.67 1.335l-3.33 1.665l-6 -3l-6 3v-13l2.665 -1.333" />
      <path d="M9 4v1m0 4v8" />
      <path d="M15 7v4m0 4v5" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconMapOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
