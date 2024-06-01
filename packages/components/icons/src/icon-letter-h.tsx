import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterH = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 4l0 16" />
      <path d="M7 12l10 0" />
      <path d="M7 4l0 16" />
    </>
  ),
  displayName: 'IconLetterH',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
