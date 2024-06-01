import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconZoomCode = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M21 21l-6 -6" />
      <path d="M8 8l-2 2l2 2" />
      <path d="M12 8l2 2l-2 2" />
    </>
  ),
  displayName: 'IconZoomCode',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
