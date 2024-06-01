import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSignalH = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 16v-8" />
      <path d="M14 8v8" />
      <path d="M10 12h4" />
    </>
  ),
  displayName: 'IconSignalH',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
