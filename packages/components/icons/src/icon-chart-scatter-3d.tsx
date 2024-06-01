import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChartScatter3d = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 20l9 -7" />
      <path d="M12 3v10l9 7" />
      <path d="M17 12v.015" />
      <path d="M17 4.015v.015" />
      <path d="M21 8.015v.015" />
      <path d="M12 19.015v.015" />
      <path d="M3 12.015v.015" />
      <path d="M7 8.015v.015" />
      <path d="M3 4.015v.015" />
    </>
  ),
  displayName: 'IconChartScatter3d',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
