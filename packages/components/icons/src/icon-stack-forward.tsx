import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconStackForward = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 5l-8 4l8 4l8 -4l-8 -4" fill="currentColor" />
      <path d="M10 12l-6 3l8 4l8 -4l-6 -3" />
    </>
  ),
  displayName: 'IconStackForward',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
