import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChartSankey = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 3v18h18" />
      <path d="M3 6h18" />
      <path d="M3 8c10 0 8 9 18 9" />
    </>
  ),
  displayName: 'IconChartSankey',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
