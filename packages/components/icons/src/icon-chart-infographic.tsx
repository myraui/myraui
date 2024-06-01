import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChartInfographic = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M7 3v4h4" />
      <path d="M9 17l0 4" />
      <path d="M17 14l0 7" />
      <path d="M13 13l0 8" />
      <path d="M21 12l0 9" />
    </>
  ),
  displayName: 'IconChartInfographic',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
