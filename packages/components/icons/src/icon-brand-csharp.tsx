import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandCSharp = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3" />
      <path d="M16 7l-1 10" />
      <path d="M20 7l-1 10" />
      <path d="M14 10h7.5" />
      <path d="M21 14h-7.5" />
    </>
  ),
  displayName: 'IconBrandCSharp',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
