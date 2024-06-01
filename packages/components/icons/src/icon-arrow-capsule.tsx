import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowCapsule = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 15a6 6 0 1 1 -12 0v-6a6 6 0 1 1 12 0v2" />
      <path d="M15 8l3 3l3 -3" />
    </>
  ),
  displayName: 'IconArrowCapsule',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
