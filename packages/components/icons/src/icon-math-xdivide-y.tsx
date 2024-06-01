import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMathXDivideY = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 3l6 6" />
      <path d="M9 9l6 -6" />
      <path d="M9 15l3 4.5" />
      <path d="M15 15l-4.5 7" />
      <path d="M5 12h14" />
    </>
  ),
  displayName: 'IconMathXDivideY',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
