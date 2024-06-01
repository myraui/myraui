import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMathEqualLower = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19 18l-14 -4" />
      <path d="M19 14l-14 -4l14 -4" />
    </>
  ),
  displayName: 'IconMathEqualLower',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
