import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandValorant = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14.5 14h4.5l2 -2v-6z" />
      <path d="M9 19h5l-11 -13v6z" />
    </>
  ),
  displayName: 'IconBrandValorant',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
