import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowsDiagonal2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 20l4 0l0 -4" />
      <path d="M14 14l6 6" />
      <path d="M8 4l-4 0l0 4" />
      <path d="M4 4l6 6" />
    </>
  ),
  displayName: 'IconArrowsDiagonal2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
