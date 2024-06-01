import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMathYMinusY = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M2 9l3 5.063" />
      <path d="M8 9l-4.8 9" />
      <path d="M16 9l3 5.063" />
      <path d="M22 9l-4.8 9" />
      <path d="M10 12h4" />
    </>
  ),
  displayName: 'IconMathYMinusY',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
