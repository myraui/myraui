import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLadder = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 3v18" />
      <path d="M16 3v18" />
      <path d="M8 14h8" />
      <path d="M8 10h8" />
      <path d="M8 6h8" />
      <path d="M8 18h8" />
    </>
  ),
  displayName: 'IconLadder',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
