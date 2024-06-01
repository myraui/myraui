import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMathEqualGreater = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 18l14 -4" />
      <path d="M5 14l14 -4l-14 -4" />
    </>
  ),
  displayName: 'IconMathEqualGreater',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
