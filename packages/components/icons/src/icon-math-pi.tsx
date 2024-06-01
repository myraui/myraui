import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMathPi = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 20v-16" />
      <path d="M17 4v16" />
      <path d="M20 4h-16" />
    </>
  ),
  displayName: 'IconMathPi',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
