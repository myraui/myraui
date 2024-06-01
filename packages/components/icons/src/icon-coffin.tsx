import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCoffin = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 3l-2 6l2 12h6l2 -12l-2 -6z" />
      <path d="M10 7v5" />
      <path d="M8 9h4" />
      <path d="M13 21h4l2 -12l-2 -6h-4" />
    </>
  ),
  displayName: 'IconCoffin',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
