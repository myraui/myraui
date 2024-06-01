import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCirclePercentage = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <path d="M9 15.075l6 -6" />
      <path d="M9 9.105v.015" />
      <path d="M15 15.12v.015" />
    </>
  ),
  displayName: 'IconCirclePercentage',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
