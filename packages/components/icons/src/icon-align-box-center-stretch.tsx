import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAlignBoxCenterStretch = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 19v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M11 17h2" />
      <path d="M9 12h6" />
      <path d="M10 7h4" />
    </>
  ),
  displayName: 'IconAlignBoxCenterStretch',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
