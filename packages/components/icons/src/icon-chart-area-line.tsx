import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChartAreaLine = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 19l4 -6l4 2l4 -5l4 4l0 5l-16 0" />
      <path d="M4 12l3 -4l4 2l5 -6l4 4" />
    </>
  ),
  displayName: 'IconChartAreaLine',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
