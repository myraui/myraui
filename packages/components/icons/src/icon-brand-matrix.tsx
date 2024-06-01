import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandMatrix = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 3h-1v18h1" />
      <path d="M20 21h1v-18h-1" />
      <path d="M7 9v6" />
      <path d="M12 15v-3.5a2.5 2.5 0 1 0 -5 0v.5" />
      <path d="M17 15v-3.5a2.5 2.5 0 1 0 -5 0v.5" />
    </>
  ),
  displayName: 'IconBrandMatrix',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
