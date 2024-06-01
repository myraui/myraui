import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCircuitCapacitorPolarized = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 12h-8" />
      <path d="M2 12h8" />
      <path d="M10 7v10" />
      <path d="M14 7v10" />
      <path d="M17 5h4" />
      <path d="M19 3v4" />
    </>
  ),
  displayName: 'IconCircuitCapacitorPolarized',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
