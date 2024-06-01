import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCircuitCellPlus = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M2 12h9" />
      <path d="M15 12h7" />
      <path d="M11 5v14" />
      <path d="M15 9v6" />
      <path d="M3 5h4" />
      <path d="M5 3v4" />
    </>
  ),
  displayName: 'IconCircuitCellPlus',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
