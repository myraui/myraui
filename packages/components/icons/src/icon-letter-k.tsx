import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterK = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 4l0 16" />
      <path d="M7 12h2l8 -8" />
      <path d="M9 12l8 8" />
    </>
  ),
  displayName: 'IconLetterK',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
