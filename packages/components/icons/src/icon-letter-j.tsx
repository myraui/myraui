import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterJ = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 4v12a4 4 0 0 1 -4 4h-2a4 4 0 0 1 -4 -4" />
    </>
  ),
  displayName: 'IconLetterJ',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
