import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBorderCornerSquare = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 20v-15a1 1 0 0 1 1 -1h15" />
    </>
  ),
  displayName: 'IconBorderCornerSquare',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
