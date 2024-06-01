import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCircleLetterY = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M10 8l2 5l2 -5" />
      <path d="M12 16v-3" />
    </>
  ),
  displayName: 'IconCircleLetterY',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
