import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconGlobe = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 9a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
      <path d="M5.75 15a8.015 8.015 0 1 0 9.25 -13" />
      <path d="M11 17v4" />
      <path d="M7 21h8" />
    </>
  ),
  displayName: 'IconGlobe',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
