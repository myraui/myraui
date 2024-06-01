import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandBandcamp = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8.5 6h13.5l-7 12h-13z" />
    </>
  ),
  displayName: 'IconBrandBandcamp',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
