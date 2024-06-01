import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMathXMinusX = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M2 9l6 6" />
      <path d="M2 15l6 -6" />
      <path d="M16 9l6 6" />
      <path d="M16 15l6 -6" />
      <path d="M10 12h4" />
    </>
  ),
  displayName: 'IconMathXMinusX',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
