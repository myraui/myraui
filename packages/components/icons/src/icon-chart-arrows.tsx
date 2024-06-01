import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChartArrows = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18l14 0" />
      <path d="M9 9l3 3l-3 3" />
      <path d="M14 15l3 3l-3 3" />
      <path d="M3 3l0 18" />
      <path d="M3 12l9 0" />
      <path d="M18 3l3 3l-3 3" />
      <path d="M3 6l18 0" />
    </>
  ),
  displayName: 'IconChartArrows',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
