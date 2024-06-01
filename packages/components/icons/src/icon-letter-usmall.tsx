import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterUSmall = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 8v6a2 2 0 1 0 4 0v-6" />
    </>
  ),
  displayName: 'IconLetterUSmall',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
