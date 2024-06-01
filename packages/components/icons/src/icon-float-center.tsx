import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconFloatCenter = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 5m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
      <path d="M4 7l1 0" />
      <path d="M4 11l1 0" />
      <path d="M19 7l1 0" />
      <path d="M19 11l1 0" />
      <path d="M4 15l16 0" />
      <path d="M4 19l16 0" />
    </>
  ),
  displayName: 'IconFloatCenter',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
