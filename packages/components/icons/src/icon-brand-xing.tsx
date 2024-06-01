import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandXing = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 21l-4 -7l6.5 -11" />
      <path d="M7 7l2 3.5l-3 4.5" />
    </>
  ),
  displayName: 'IconBrandXing',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
