import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowForwardUpDouble = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 14l4 -4l-4 -4" />
      <path d="M16 14l4 -4l-4 -4" />
      <path d="M15 10h-7a4 4 0 1 0 0 8h1" />
    </>
  ),
  displayName: 'IconArrowForwardUpDouble',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
