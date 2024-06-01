import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconStackBackward = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 12l6 -3l-8 -4l-8 4l6 3" />
      <path d="M10 12l-6 3l8 4l8 -4l-6 -3l-2 1z" fill="currentColor" />
    </>
  ),
  displayName: 'IconStackBackward',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
