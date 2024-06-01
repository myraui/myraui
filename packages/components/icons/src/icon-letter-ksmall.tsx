import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterKSmall = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10.5 8v8" />
      <path d="M14.5 8l-3 4l3 4" />
      <path d="M10.5 12h1" />
    </>
  ),
  displayName: 'IconLetterKSmall',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
