import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterZSmall = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 8h4l-4 8h4" />
    </>
  ),
  displayName: 'IconLetterZSmall',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
