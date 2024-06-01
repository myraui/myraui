import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSourceCode = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14.5 4h2.5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-5" />
      <path d="M6 5l-2 2l2 2" />
      <path d="M10 9l2 -2l-2 -2" />
    </>
  ),
  displayName: 'IconSourceCode',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
