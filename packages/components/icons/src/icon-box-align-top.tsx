import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBoxAlignTop = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z" />
      <path d="M4 15.005v-.01" />
      <path d="M4 20.005v-.01" />
      <path d="M9 20.005v-.01" />
      <path d="M15 20.005v-.01" />
      <path d="M20 20.005v-.01" />
      <path d="M20 15.005v-.01" />
    </>
  ),
  displayName: 'IconBoxAlignTop',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
