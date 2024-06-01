import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTemperatureOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 10v3.5a4 4 0 1 0 5.836 2.33m-1.836 -5.83v-5a2 2 0 1 0 -4 0v1" />
      <path d="M13 9h1" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconTemperatureOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
