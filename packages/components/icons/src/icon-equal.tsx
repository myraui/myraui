import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconEqual = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 10h14" />
      <path d="M5 14h14" />
    </>
  ),
  displayName: 'IconEqual',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
