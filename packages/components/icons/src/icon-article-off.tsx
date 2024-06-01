import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArticleOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 4h11a2 2 0 0 1 2 2v11m-1.172 2.821a1.993 1.993 0 0 1 -.828 .179h-14a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 1.156 -1.814" />
      <path d="M7 8h1m4 0h5" />
      <path d="M7 12h5m4 0h1" />
      <path d="M7 16h9" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconArticleOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
