import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconRectangleRoundedTop = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 6h6a6 6 0 0 1 6 6v5a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-5a6 6 0 0 1 6 -6z" />
    </>
  ),
  displayName: 'IconRectangleRoundedTop',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
