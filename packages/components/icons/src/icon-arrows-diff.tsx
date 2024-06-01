import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowsDiff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 16h10" />
      <path d="M11 16l4 4" />
      <path d="M11 16l4 -4" />
      <path d="M13 8h-10" />
      <path d="M13 8l-4 4" />
      <path d="M13 8l-4 -4" />
    </>
  ),
  displayName: 'IconArrowsDiff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
