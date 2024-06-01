import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDivide = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="6" r="1" fill="currentColor" />
      <circle cx="12" cy="18" r="1" fill="currentColor" />
      <path d="M5 12l14 0" />
    </>
  ),
  displayName: 'IconDivide',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
