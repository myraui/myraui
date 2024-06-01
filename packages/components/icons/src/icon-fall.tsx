import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconFall = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 21l1 -5l-1 -4l-3 -4h4l3 -3" />
      <path d="M6 16l-1 -4l3 -4" />
      <path d="M6 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M13.5 12h2.5l4 2" />
    </>
  ),
  displayName: 'IconFall',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
