import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandDigg = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 15h-3v-4h3" />
      <path d="M15 15h-3v-4h3" />
      <path d="M9 15v-4" />
      <path d="M15 11v7h-3" />
      <path d="M6 7v8" />
      <path d="M21 15h-3v-4h3" />
      <path d="M21 11v7h-3" />
    </>
  ),
  displayName: 'IconBrandDigg',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
