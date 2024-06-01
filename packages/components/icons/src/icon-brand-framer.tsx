import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandFramer = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 15h12l-12 -12h12v6h-12v6l6 6v-6" />
    </>
  ),
  displayName: 'IconBrandFramer',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
