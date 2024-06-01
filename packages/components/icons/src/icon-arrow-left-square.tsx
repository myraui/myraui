import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowLeftSquare = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 12h-14" />
      <path d="M6 9l-3 3l3 3" />
      <path d="M21 14h-4v-4h4z" />
    </>
  ),
  displayName: 'IconArrowLeftSquare',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
