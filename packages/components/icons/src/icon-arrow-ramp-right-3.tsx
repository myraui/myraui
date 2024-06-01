import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowRampRight3 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 3v6" />
      <path d="M16 16l4 -4l-4 -4" />
      <path d="M6 21v-6a3 3 0 0 1 3 -3h11" />
    </>
  ),
  displayName: 'IconArrowRampRight3',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
