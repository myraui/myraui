import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMilitaryRank = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 7v13h-10v-13l5 -3z" />
      <path d="M10 13l2 -1l2 1" />
      <path d="M10 17l2 -1l2 1" />
      <path d="M10 9l2 -1l2 1" />
    </>
  ),
  displayName: 'IconMilitaryRank',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
