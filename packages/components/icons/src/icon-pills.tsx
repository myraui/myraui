import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPills = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
      <path d="M17 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M4.5 4.5l7 7" />
      <path d="M19.5 14.5l-5 5" />
    </>
  ),
  displayName: 'IconPills',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
