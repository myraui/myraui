import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSTurnUp = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M5 17v-9.5a3.5 3.5 0 0 1 7 0v9a3.5 3.5 0 0 0 7 0v-13.5" />
      <path d="M16 6l3 -3l3 3" />
    </>
  ),
  displayName: 'IconSTurnUp',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
