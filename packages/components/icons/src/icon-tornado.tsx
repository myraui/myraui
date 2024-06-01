import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTornado = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M21 4l-18 0" />
      <path d="M13 16l-6 0" />
      <path d="M11 20l4 0" />
      <path d="M6 8l14 0" />
      <path d="M4 12l12 0" />
    </>
  ),
  displayName: 'IconTornado',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
