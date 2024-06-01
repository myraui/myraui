import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconStackBack = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 8l8 4l8 -4l-8 -4z" />
      <path d="M12 16l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2z" fill="currentColor" />
      <path d="M8 10l-4 2l4 2m8 0l4 -2l-4 -2" />
    </>
  ),
  displayName: 'IconStackBack',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
