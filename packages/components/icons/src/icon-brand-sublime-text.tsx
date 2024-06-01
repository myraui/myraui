import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandSublimeText = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19 8l-14 4.5v-5.5l14 -4.5z" />
      <path d="M19 17l-14 4.5v-5.5l14 -4.5z" />
      <path d="M19 11.5l-14 -4.5" />
      <path d="M5 12.5l14 4.5" />
    </>
  ),
  displayName: 'IconBrandSublimeText',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
