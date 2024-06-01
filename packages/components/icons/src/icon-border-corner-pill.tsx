import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBorderCornerPill = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 20v-5c0 -6.075 4.925 -11 11 -11h5" />
    </>
  ),
  displayName: 'IconBorderCornerPill',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
