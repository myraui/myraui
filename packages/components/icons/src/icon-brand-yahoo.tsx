import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandYahoo = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 6l5 0" />
      <path d="M7 18l7 0" />
      <path d="M4.5 6l5.5 7v5" />
      <path d="M10 13l6 -5" />
      <path d="M12.5 8l5 0" />
      <path d="M20 11l0 4" />
      <path d="M20 18l0 .01" />
    </>
  ),
  displayName: 'IconBrandYahoo',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
