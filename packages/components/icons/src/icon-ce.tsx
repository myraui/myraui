import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCe = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 6a6 6 0 1 0 0 12" />
      <path d="M21 6a6 6 0 1 0 0 12" />
      <path d="M15 12h6" />
    </>
  ),
  displayName: 'IconCe',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
