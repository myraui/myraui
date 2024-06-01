import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandCitymapper = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 11a1 1 0 1 1 -1 1.013a1 1 0 0 1 1 -1v-.013z" />
      <path d="M21 11a1 1 0 1 1 -1 1.013a1 1 0 0 1 1 -1v-.013z" />
      <path d="M8 12h8" />
      <path d="M13 9l3 3l-3 3" />
    </>
  ),
  displayName: 'IconBrandCitymapper',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
