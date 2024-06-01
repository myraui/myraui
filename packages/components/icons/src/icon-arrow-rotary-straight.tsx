import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowRotaryStraight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M13 16v5" />
      <path d="M13 3v7" />
      <path d="M9 7l4 -4l4 4" />
    </>
  ),
  displayName: 'IconArrowRotaryStraight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
