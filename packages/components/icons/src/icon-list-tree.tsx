import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconListTree = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 6h11" />
      <path d="M12 12h8" />
      <path d="M15 18h5" />
      <path d="M5 6v.01" />
      <path d="M8 12v.01" />
      <path d="M11 18v.01" />
    </>
  ),
  displayName: 'IconListTree',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
