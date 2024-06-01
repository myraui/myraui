import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconZodiacLibra = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 20l14 0" />
      <path d="M5 17h5v-.3a7 7 0 1 1 4 0v.3h5" />
    </>
  ),
  displayName: 'IconZodiacLibra',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
