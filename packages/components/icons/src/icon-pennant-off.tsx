import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPennantOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 21h4" />
      <path d="M10 21v-11m0 -4v-3" />
      <path d="M10 4l9 4l-4.858 2.16m-2.764 1.227l-1.378 .613" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconPennantOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
