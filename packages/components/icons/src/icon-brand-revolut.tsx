import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandRevolut = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 10h3v10h-3z" />
      <path d="M14.5 4h-9.5v3h9.4a1.5 1.5 0 0 1 0 3h-3.4v4l4 6h4l-5 -7h.5a4.5 4.5 0 1 0 0 -9z" />
    </>
  ),
  displayName: 'IconBrandRevolut',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
