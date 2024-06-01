import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDoorEnter = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 12v.01" />
      <path d="M3 21h18" />
      <path d="M5 21v-16a2 2 0 0 1 2 -2h6m4 10.5v7.5" />
      <path d="M21 7h-7m3 -3l-3 3l3 3" />
    </>
  ),
  displayName: 'IconDoorEnter',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
