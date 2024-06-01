import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconColumnsOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6h2" />
      <path d="M4 10h5.5" />
      <path d="M4 14h5.5" />
      <path d="M4 18h5.5" />
      <path d="M14.5 6h5.5" />
      <path d="M14.5 10h5.5" />
      <path d="M18 14h2" />
      <path d="M14.5 18h3.5" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconColumnsOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
