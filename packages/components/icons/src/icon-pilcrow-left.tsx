import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPilcrowLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 9h-2a3 3 0 1 1 0 -6h7" />
      <path d="M11 3v11" />
      <path d="M15 3v11" />
      <path d="M3 18h18" />
      <path d="M6 15l-3 3l3 3" />
    </>
  ),
  displayName: 'IconPilcrowLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
