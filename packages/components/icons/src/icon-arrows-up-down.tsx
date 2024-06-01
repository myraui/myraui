import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowsUpDown = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 3l0 18" />
      <path d="M10 6l-3 -3l-3 3" />
      <path d="M20 18l-3 3l-3 -3" />
      <path d="M17 21l0 -18" />
    </>
  ),
  displayName: 'IconArrowsUpDown',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
