import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTextOrientation = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 15l-5 -5c-1.367 -1.367 -1.367 -3.633 0 -5s3.633 -1.367 5 0l5 5" />
      <path d="M5.5 11.5l5 -5" />
      <path d="M21 12l-9 9" />
      <path d="M21 12v4" />
      <path d="M21 12h-4" />
    </>
  ),
  displayName: 'IconTextOrientation',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
