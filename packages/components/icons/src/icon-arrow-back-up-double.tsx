import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowBackUpDouble = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 14l-4 -4l4 -4" />
      <path d="M8 14l-4 -4l4 -4" />
      <path d="M9 10h7a4 4 0 1 1 0 8h-1" />
    </>
  ),
  displayName: 'IconArrowBackUpDouble',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
