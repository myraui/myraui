import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandDeliveroo = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 11l1 -9l5 .5l-1 13.5l-3 6l-12.5 -2.5l-1.5 -6l7 -1.5l-1.5 -7.5l4.5 -1z" />
      <circle cx="15.5" cy="15.5" r="1" fill="currentColor" />
      <circle cx="11.5" cy="14.5" r="1" fill="currentColor" />
    </>
  ),
  displayName: 'IconBrandDeliveroo',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
