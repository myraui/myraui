import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterW = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4l4 16l4 -14l4 14l4 -16" />
    </>
  ),
  displayName: 'IconLetterW',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
