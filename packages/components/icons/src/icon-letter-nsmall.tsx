import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterNSmall = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 16v-8l4 8v-8" />
    </>
  ),
  displayName: 'IconLetterNSmall',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
