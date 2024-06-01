import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCircleLetterX = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M10 8l4 8" />
      <path d="M10 16l4 -8" />
    </>
  ),
  displayName: 'IconCircleLetterX',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
