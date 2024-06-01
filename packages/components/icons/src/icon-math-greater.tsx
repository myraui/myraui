import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMathGreater = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 18l14 -6l-14 -6" />
    </>
  ),
  displayName: 'IconMathGreater',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
