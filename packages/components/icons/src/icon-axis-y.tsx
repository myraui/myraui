import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAxisY = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 20h-.01" />
      <path d="M15 20h-.01" />
      <path d="M19 20h-.01" />
      <path d="M4 7l3 -3l3 3" />
      <path d="M7 20v-16" />
    </>
  ),
  displayName: 'IconAxisY',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
