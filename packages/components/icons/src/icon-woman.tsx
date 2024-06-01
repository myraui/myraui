import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconWoman = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 16v5" />
      <path d="M14 16v5" />
      <path d="M8 16h8l-2 -7h-4z" />
      <path d="M5 11c1.667 -1.333 3.333 -2 5 -2" />
      <path d="M19 11c-1.667 -1.333 -3.333 -2 -5 -2" />
      <path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </>
  ),
  displayName: 'IconWoman',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
