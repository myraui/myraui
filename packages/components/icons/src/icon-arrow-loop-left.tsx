import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowLoopLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 21v-13a4 4 0 1 1 4 4h-13" />
      <path d="M8 16l-4 -4l4 -4" />
    </>
  ),
  displayName: 'IconArrowLoopLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
