import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconStack = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 6l-8 4l8 4l8 -4l-8 -4" />
      <path d="M4 14l8 4l8 -4" />
    </>
  ),
  displayName: 'IconStack',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
