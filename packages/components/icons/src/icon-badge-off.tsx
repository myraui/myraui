import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBadgeOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 7v10l5 3l5 -3m0 -4v-9l-5 3l-2.496 -1.497" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconBadgeOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
