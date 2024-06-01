import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandBackbone = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 20l14 -8l-14 -8z" />
      <path d="M19 20l-14 -8l14 -8z" />
    </>
  ),
  displayName: 'IconBrandBackbone',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
