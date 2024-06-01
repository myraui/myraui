import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChevronsLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 7l-5 5l5 5" />
      <path d="M17 7l-5 5l5 5" />
    </>
  ),
  displayName: 'IconChevronsLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
