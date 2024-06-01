import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMathNot = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12h14v4" />
    </>
  ),
  displayName: 'IconMathNot',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
