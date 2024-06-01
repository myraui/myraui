import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBaseline = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 20h16" />
      <path d="M8 16v-8a4 4 0 1 1 8 0v8" />
      <path d="M8 10h8" />
    </>
  ),
  displayName: 'IconBaseline',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
