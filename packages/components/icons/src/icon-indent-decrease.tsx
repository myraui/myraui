import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconIndentDecrease = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 6l-7 0" />
      <path d="M20 12l-9 0" />
      <path d="M20 18l-7 0" />
      <path d="M8 8l-4 4l4 4" />
    </>
  ),
  displayName: 'IconIndentDecrease',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
