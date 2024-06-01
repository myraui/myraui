import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCircuitBattery = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M18 5v14" />
      <path d="M14 9v6" />
      <path d="M10 5v14" />
      <path d="M6 9v6" />
    </>
  ),
  displayName: 'IconCircuitBattery',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
