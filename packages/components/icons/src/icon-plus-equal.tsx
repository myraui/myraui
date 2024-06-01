import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPlusEqual = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 7h6" />
      <path d="M7 4v6" />
      <path d="M20 16h-6" />
      <path d="M20 19h-6" />
      <path d="M5 19l14 -14" />
    </>
  ),
  displayName: 'IconPlusEqual',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
