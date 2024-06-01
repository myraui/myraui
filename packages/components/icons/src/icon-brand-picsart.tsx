import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandPicsart = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 9m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M12 9m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M5 9v11a2 2 0 1 0 4 0v-4.5" />
    </>
  ),
  displayName: 'IconBrandPicsart',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
