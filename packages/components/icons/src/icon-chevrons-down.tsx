import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChevronsDown = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 7l5 5l5 -5" />
      <path d="M7 13l5 5l5 -5" />
    </>
  ),
  displayName: 'IconChevronsDown',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
