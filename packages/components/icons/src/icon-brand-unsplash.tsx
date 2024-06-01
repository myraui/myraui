import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandUnsplash = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 11h5v4h6v-4h5v9h-16zm5 -7h6v4h-6z" />
    </>
  ),
  displayName: 'IconBrandUnsplash',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
