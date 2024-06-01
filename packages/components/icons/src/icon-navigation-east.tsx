import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconNavigationEast = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 3h-4v6h4" />
      <path d="M10 6h2.5" />
      <path d="M16 21l-4 -8l-4 8l4 -2z" />
    </>
  ),
  displayName: 'IconNavigationEast',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
