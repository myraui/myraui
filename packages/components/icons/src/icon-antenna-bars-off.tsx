import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAntennaBarsOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 18v-3" />
      <path d="M10 18v-6" />
      <path d="M14 18v-4" />
      <path d="M14 10v-1" />
      <path d="M18 14v-8" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconAntennaBarsOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
