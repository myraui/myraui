import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDirectionArrows = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <path d="M8 11l-1 1l1 1" />
      <path d="M11 8l1 -1l1 1" />
      <path d="M16 11l1 1l-1 1" />
      <path d="M11 16l1 1l1 -1" />
    </>
  ),
  displayName: 'IconDirectionArrows',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
