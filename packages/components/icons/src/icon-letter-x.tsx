import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterX = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 4l10 16" />
      <path d="M17 4l-10 16" />
    </>
  ),
  displayName: 'IconLetterX',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
