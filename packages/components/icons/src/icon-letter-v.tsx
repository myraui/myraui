import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterV = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 4l6 16l6 -16" />
    </>
  ),
  displayName: 'IconLetterV',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
