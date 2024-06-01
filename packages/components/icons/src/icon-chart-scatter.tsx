import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChartScatter = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 3v18h18" />
      <path d="M8 15.015v.015" />
      <path d="M16 16.015v.015" />
      <path d="M8 7.03v.015" />
      <path d="M12 11.03v.015" />
      <path d="M19 11.03v.015" />
    </>
  ),
  displayName: 'IconChartScatter',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
