import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterXSmall = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 8l4 8" />
      <path d="M10 16l4 -8" />
    </>
  ),
  displayName: 'IconLetterXSmall',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
