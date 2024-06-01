import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMathXy = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 9l3 5.063" />
      <path d="M4 9l6 6" />
      <path d="M4 15l6 -6" />
      <path d="M20 9l-4.8 9" />
    </>
  ),
  displayName: 'IconMathXy',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
