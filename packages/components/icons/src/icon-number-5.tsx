import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconNumber5 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 20h4a4 4 0 1 0 0 -8h-4v-8h8" />
    </>
  ),
  displayName: 'IconNumber5',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
