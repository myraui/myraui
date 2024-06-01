import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBellDown = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12.5 17h-8.5a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v1" />
      <path d="M9 17v1a3 3 0 0 0 3.518 2.955" />
      <path d="M19 16v6" />
      <path d="M22 19l-3 3l-3 -3" />
    </>
  ),
  displayName: 'IconBellDown',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
