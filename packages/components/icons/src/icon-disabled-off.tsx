import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDisabledOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 7a2 2 0 1 0 -2 -2" />
      <path d="M11 11v4h4l4 5" />
      <path d="M15 11h1" />
      <path d="M7 11.5a5 5 0 1 0 6 7.5" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconDisabledOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
