import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMapCheck = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v9" />
      <path d="M9 4v13" />
      <path d="M15 7v8" />
      <path d="M15 19l2 2l4 -4" />
    </>
  ),
  displayName: 'IconMapCheck',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
