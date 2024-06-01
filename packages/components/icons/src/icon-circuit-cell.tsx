import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCircuitCell = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M2 12h8" />
      <path d="M14 12h8" />
      <path d="M10 5v14" />
      <path d="M14 9v6" />
    </>
  ),
  displayName: 'IconCircuitCell',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
