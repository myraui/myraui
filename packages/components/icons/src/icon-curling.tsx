import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurling = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 9m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v2a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
      <path d="M4 14h16" />
      <path d="M8 5h6a2 2 0 0 1 2 2v2" />
    </>
  ),
  displayName: 'IconCurling',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
