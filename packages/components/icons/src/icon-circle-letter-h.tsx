import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCircleLetterH = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M10 16v-8m4 0v8" />
      <path d="M10 12h4" />
    </>
  ),
  displayName: 'IconCircleLetterH',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
