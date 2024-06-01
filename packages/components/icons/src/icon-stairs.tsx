import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconStairs = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 5h-5v5h-5v5h-5v5h-5" />
    </>
  ),
  displayName: 'IconStairs',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
