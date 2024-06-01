import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterESmall = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 8h-4v8h4" />
      <path d="M10 12h2.5" />
    </>
  ),
  displayName: 'IconLetterESmall',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
