import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowIteration = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8.5 16a5.5 5.5 0 1 0 -5.5 -5.5v.5" />
      <path d="M3 16h18" />
      <path d="M18 13l3 3l-3 3" />
    </>
  ),
  displayName: 'IconArrowIteration',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
