import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowRotaryRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M8 10v10" />
      <path d="M17 11l4 -4l-4 -4" />
      <path d="M11 7h10" />
    </>
  ),
  displayName: 'IconArrowRotaryRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
