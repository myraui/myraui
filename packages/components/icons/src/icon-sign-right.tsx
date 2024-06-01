import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSignRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 21h4" />
      <path d="M10 21v-10" />
      <path d="M10 6v-3" />
      <path d="M6 6h10l2 2.5l-2 2.5h-10z" />
    </>
  ),
  displayName: 'IconSignRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
