import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandTed = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M2 8h4" />
      <path d="M4 8v8" />
      <path d="M13 8h-4v8h4" />
      <path d="M9 12h2.5" />
      <path d="M16 8v8h2a3 3 0 0 0 3 -3v-2a3 3 0 0 0 -3 -3h-2z" />
    </>
  ),
  displayName: 'IconBrandTed',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
