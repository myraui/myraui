import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPiano = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M9 19v-6" />
      <path d="M8 5v8h2v-8" />
      <path d="M15 19v-6" />
      <path d="M14 5v8h2v-8" />
    </>
  ),
  displayName: 'IconPiano',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
