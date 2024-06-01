import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSortZA = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 8h4l-4 8h4" />
      <path d="M16 16v-6a2 2 0 1 1 4 0v6" />
      <path d="M16 13h4" />
      <path d="M11 12h2" />
    </>
  ),
  displayName: 'IconSortZA',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
