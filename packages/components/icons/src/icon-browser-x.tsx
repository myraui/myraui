import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrowserX = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
      <path d="M4 8h16" />
      <path d="M8 4v4" />
      <path d="M10 16l4 -4" />
      <path d="M14 16l-4 -4" />
    </>
  ),
  displayName: 'IconBrowserX',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
