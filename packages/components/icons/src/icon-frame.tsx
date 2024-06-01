import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconFrame = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 7l16 0" />
      <path d="M4 17l16 0" />
      <path d="M7 4l0 16" />
      <path d="M17 4l0 16" />
    </>
  ),
  displayName: 'IconFrame',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
