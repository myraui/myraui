import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPillOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10.495 6.505l2 -2a4.95 4.95 0 0 1 7 7l-2 2m-2 2l-4 4a4.95 4.95 0 0 1 -7 -7l4 -4" />
      <path d="M8.5 8.5l7 7" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconPillOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
