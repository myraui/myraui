import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconNotesOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" />
      <path d="M11 7h4" />
      <path d="M9 11h2" />
      <path d="M9 15h4" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconNotesOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
