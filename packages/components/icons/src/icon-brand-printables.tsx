import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandPrintables = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 21l12 -7v-7.5l-6 -3.5l-6 3.5l6 3.5v7.5l-6 -3.5z" />
    </>
  ),
  displayName: 'IconBrandPrintables',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
