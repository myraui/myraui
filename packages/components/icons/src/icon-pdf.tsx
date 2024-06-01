import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPdf = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z" />
      <path d="M3 12h2a2 2 0 1 0 0 -4h-2v8" />
      <path d="M17 12h3" />
      <path d="M21 8h-4v8" />
    </>
  ),
  displayName: 'IconPdf',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
