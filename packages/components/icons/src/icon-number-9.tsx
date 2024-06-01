import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconNumber9 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 8a4 4 0 1 0 -8 0v1a4 4 0 1 0 8 0" />
      <path d="M8 16a4 4 0 1 0 8 0v-8" />
    </>
  ),
  displayName: 'IconNumber9',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
