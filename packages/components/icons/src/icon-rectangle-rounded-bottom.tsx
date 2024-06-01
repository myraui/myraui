import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconRectangleRoundedBottom = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 18h6a6 6 0 0 0 6 -6v-5a1 1 0 0 0 -1 -1h-16a1 1 0 0 0 -1 1v5a6 6 0 0 0 6 6z" />
    </>
  ),
  displayName: 'IconRectangleRoundedBottom',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
