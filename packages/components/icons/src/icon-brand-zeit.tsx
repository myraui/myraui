import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandZeit = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 20h18l-9 -16z" />
    </>
  ),
  displayName: 'IconBrandZeit',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
