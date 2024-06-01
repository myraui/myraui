import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconStackMiddle = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 10l4 -2l-8 -4l-8 4l4 2" />
      <path d="M12 12l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2z" fill="currentColor" />
      <path d="M8 14l-4 2l8 4l8 -4l-4 -2" />
    </>
  ),
  displayName: 'IconStackMiddle',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
