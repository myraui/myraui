import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPilcrowRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 9h-2a3 3 0 1 1 0 -6h7" />
      <path d="M11 3v11" />
      <path d="M15 3v11" />
      <path d="M21 18h-18" />
      <path d="M18 15l3 3l-3 3" />
    </>
  ),
  displayName: 'IconPilcrowRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
