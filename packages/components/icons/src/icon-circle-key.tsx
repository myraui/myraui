import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCircleKey = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" />
      <path d="M12.5 11.5l-4 4l1.5 1.5" />
      <path d="M12 15l-1.5 -1.5" />
    </>
  ),
  displayName: 'IconCircleKey',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
