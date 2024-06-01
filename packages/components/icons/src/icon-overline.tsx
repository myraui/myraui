import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconOverline = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 9v5a5 5 0 0 0 10 0v-5" />
      <path d="M5 5h14" />
    </>
  ),
  displayName: 'IconOverline',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
