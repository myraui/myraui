import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChartArea = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 19l16 0" />
      <path d="M4 15l4 -6l4 2l4 -5l4 4l0 5l-16 0" />
    </>
  ),
  displayName: 'IconChartArea',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
