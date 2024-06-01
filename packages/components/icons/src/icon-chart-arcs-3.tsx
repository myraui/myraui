import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChartArcs3 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M7 12a5 5 0 1 0 5 -5" />
      <path d="M6.29 18.957a9 9 0 1 0 5.71 -15.957" />
    </>
  ),
  displayName: 'IconChartArcs3',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
