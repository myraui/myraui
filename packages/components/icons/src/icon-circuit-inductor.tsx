import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCircuitInductor = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M2 14h3v-2a2 2 0 1 1 4 0v2v-1.5a2.5 2.5 0 1 1 5 0v1.5v-1.5a2.5 2.5 0 1 1 5 0v1.5h3" />
    </>
  ),
  displayName: 'IconCircuitInductor',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
