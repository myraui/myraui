import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandKotlin = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 20h-16v-16h16" />
      <path d="M4 20l16 -16" />
      <path d="M4 12l8 -8" />
      <path d="M12 12l8 8" />
    </>
  ),
  displayName: 'IconBrandKotlin',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
