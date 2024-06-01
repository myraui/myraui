import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSword = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 4v5l-9 7l-4 4l-3 -3l4 -4l7 -9z" />
      <path d="M6.5 11.5l6 6" />
    </>
  ),
  displayName: 'IconSword',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
