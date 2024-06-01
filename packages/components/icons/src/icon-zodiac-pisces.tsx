import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconZodiacPisces = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 3a21 21 0 0 1 0 18" />
      <path d="M19 3a21 21 0 0 0 0 18" />
      <path d="M5 12l14 0" />
    </>
  ),
  displayName: 'IconZodiacPisces',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
