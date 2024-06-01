import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconIndentIncrease = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 6l-11 0" />
      <path d="M20 12l-7 0" />
      <path d="M20 18l-11 0" />
      <path d="M4 8l4 4l-4 4" />
    </>
  ),
  displayName: 'IconIndentIncrease',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
