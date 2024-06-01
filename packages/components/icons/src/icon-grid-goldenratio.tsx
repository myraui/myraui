import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconGridGoldenratio = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 10h18" />
      <path d="M3 14h18" />
      <path d="M10 3v18" />
      <path d="M14 3v18" />
    </>
  ),
  displayName: 'IconGridGoldenratio',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
