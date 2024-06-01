import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMars = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
      <path d="M19 5l-5.4 5.4" />
      <path d="M19 5l-5 0" />
      <path d="M19 5l0 5" />
    </>
  ),
  displayName: 'IconMars',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
