import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandBing = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 3l4 1.5v12l6 -2.5l-2 -1l-1 -4l7 2.5v4.5l-10 5l-4 -2z" />
    </>
  ),
  displayName: 'IconBrandBing',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
