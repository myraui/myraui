import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconEaseOutControlPoint = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21s10 -16 18 -16" />
      <path d="M7 5a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" />
      <path d="M7 5h2" />
      <path d="M14 5h-2" />
    </>
  ),
  displayName: 'IconEaseOutControlPoint',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
