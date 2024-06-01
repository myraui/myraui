import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTemperatureFahrenheit = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M13 12l5 0" />
      <path d="M20 6h-6a1 1 0 0 0 -1 1v11" />
    </>
  ),
  displayName: 'IconTemperatureFahrenheit',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
