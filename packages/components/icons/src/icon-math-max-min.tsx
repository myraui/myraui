import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMathMaxMin = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M3 14s.605 -5.44 2.284 -7.862m3.395 .026c2.137 2.652 4.547 9.113 6.68 11.719" />
      <path d="M18.748 18.038c.702 -.88 1.452 -3.56 2.252 -8.038" />
    </>
  ),
  displayName: 'IconMathMaxMin',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
