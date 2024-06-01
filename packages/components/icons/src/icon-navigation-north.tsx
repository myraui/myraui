import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconNavigationNorth = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 21l-4 -8l-4 8l4 -2z" />
      <path d="M10 9v-6l4 6v-6" />
    </>
  ),
  displayName: 'IconNavigationNorth',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
