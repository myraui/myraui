import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowRampLeft3 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 3v6" />
      <path d="M8 16l-4 -4l4 -4" />
      <path d="M18 21v-6a3 3 0 0 0 -3 -3h-11" />
    </>
  ),
  displayName: 'IconArrowRampLeft3',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
