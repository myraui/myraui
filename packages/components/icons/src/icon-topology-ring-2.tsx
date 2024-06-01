import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTopologyRing2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M7 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M21 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M7 18h10" />
      <path d="M18 16l-5 -8" />
      <path d="M11 8l-5 8" />
    </>
  ),
  displayName: 'IconTopologyRing2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
