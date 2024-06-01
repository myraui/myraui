import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconRipple = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 7c3 -2 6 -2 9 0s6 2 9 0" />
      <path d="M3 17c3 -2 6 -2 9 0s6 2 9 0" />
      <path d="M3 12c3 -2 6 -2 9 0s6 2 9 0" />
    </>
  ),
  displayName: 'IconRipple',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
