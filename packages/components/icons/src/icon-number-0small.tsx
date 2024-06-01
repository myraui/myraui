import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconNumber0Small = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0z" />
    </>
  ),
  displayName: 'IconNumber0Small',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
