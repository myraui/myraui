import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceIpadExclamation = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 21h-9a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v7" />
      <path d="M9 18h6" />
      <path d="M19 16v3" />
      <path d="M19 22v.01" />
    </>
  ),
  displayName: 'IconDeviceIpadExclamation',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
