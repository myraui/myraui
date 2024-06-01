import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandDouban = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 20h16" />
      <path d="M5 4h14" />
      <path d="M8 8h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2z" />
      <path d="M16 14l-2 6" />
      <path d="M8 17l1 3" />
    </>
  ),
  displayName: 'IconBrandDouban',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
