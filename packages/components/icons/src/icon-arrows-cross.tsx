import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowsCross = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 4h4v4" />
      <path d="M15 9l5 -5" />
      <path d="M4 20l5 -5" />
      <path d="M16 20h4v-4" />
      <path d="M4 4l16 16" />
    </>
  ),
  displayName: 'IconArrowsCross',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
