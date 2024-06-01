import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCircleChevronRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 9l3 3l-3 3" />
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0z" />
    </>
  ),
  displayName: 'IconCircleChevronRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
