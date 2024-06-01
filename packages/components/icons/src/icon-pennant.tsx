import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPennant = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 21l4 0" />
      <path d="M10 21l0 -18" />
      <path d="M10 4l9 4l-9 4" />
    </>
  ),
  displayName: 'IconPennant',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
