import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCircuitDiodeZener = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 12h-6" />
      <path d="M2 12h6" />
      <path d="M8 7l8 5l-8 5z" />
      <path d="M14 7h2v10h2" />
    </>
  ),
  displayName: 'IconCircuitDiodeZener',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
