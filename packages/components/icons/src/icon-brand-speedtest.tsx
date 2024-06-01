import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandSpeedtest = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5.636 19.364a9 9 0 1 1 12.728 0" />
      <path d="M16 9l-4 4" />
    </>
  ),
  displayName: 'IconBrandSpeedtest',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
