import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandAlpineJs = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 11.5l4.5 4.5h9l-9 -9z" />
      <path d="M16.5 16l4.5 -4.5l-4.5 -4.5l-4.5 4.5" />
    </>
  ),
  displayName: 'IconBrandAlpineJs',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
