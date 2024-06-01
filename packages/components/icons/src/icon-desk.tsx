import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDesk = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 6h18" />
      <path d="M4 6v13" />
      <path d="M20 19v-13" />
      <path d="M4 10h16" />
      <path d="M15 6v8a2 2 0 0 0 2 2h3" />
    </>
  ),
  displayName: 'IconDesk',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
