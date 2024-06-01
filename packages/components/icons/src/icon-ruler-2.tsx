import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconRuler2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 3l4 4l-14 14l-4 -4z" />
      <path d="M16 7l-1.5 -1.5" />
      <path d="M13 10l-1.5 -1.5" />
      <path d="M10 13l-1.5 -1.5" />
      <path d="M7 16l-1.5 -1.5" />
    </>
  ),
  displayName: 'IconRuler2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
