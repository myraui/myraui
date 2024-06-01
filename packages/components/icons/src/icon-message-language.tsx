import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMessageLanguage = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
      <path d="M10 14v-4a2 2 0 1 1 4 0v4" />
      <path d="M14 12h-4" />
    </>
  ),
  displayName: 'IconMessageLanguage',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
