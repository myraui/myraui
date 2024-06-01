import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterFSmall = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 12h3" />
      <path d="M14 8h-4v8" />
    </>
  ),
  displayName: 'IconLetterFSmall',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
