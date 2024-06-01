import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCubeUnfolded = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M2 15h10v5h5v-5h5v-5h-10v-5h-5v5h-5z" />
      <path d="M7 15v-5h5v5h5v-5" />
    </>
  ),
  displayName: 'IconCubeUnfolded',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
