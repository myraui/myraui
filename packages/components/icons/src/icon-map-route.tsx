import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMapRoute = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" />
      <path d="M9 12v.01" />
      <path d="M6 13v.01" />
      <path d="M17 15l-4 -4" />
      <path d="M13 15l4 -4" />
    </>
  ),
  displayName: 'IconMapRoute',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
