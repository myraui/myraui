import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChartPpf = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19 17c0 -6.075 -5.373 -11 -12 -11" />
      <path d="M3 3v18h18" />
    </>
  ),
  displayName: 'IconChartPpf',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
