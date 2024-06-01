import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTransitionRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3" />
      <path d="M3 18v-12a3 3 0 1 1 6 0v12a3 3 0 0 1 -6 0z" />
      <path d="M9 12h8" />
      <path d="M14 15l3 -3l-3 -3" />
    </>
  ),
  displayName: 'IconTransitionRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
