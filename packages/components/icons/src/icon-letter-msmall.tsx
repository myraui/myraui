import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterMSmall = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 16v-8l3 5l3 -5v8" />
    </>
  ),
  displayName: 'IconLetterMSmall',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
