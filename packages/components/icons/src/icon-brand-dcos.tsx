import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandDcos = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18l18 -12h-18l9 14l9 -14v10l-18 -10z" />
    </>
  ),
  displayName: 'IconBrandDcos',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
