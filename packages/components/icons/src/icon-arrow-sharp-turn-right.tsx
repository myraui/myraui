import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowSharpTurnRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 18v-11.31a.7 .7 0 0 1 1.195 -.495l9.805 9.805" />
      <path d="M13 16h5v-5" />
    </>
  ),
  displayName: 'IconArrowSharpTurnRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
