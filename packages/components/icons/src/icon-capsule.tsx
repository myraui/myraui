import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCapsule = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 3m0 6a6 6 0 0 1 6 -6h0a6 6 0 0 1 6 6v6a6 6 0 0 1 -6 6h0a6 6 0 0 1 -6 -6z" />
    </>
  ),
  displayName: 'IconCapsule',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
