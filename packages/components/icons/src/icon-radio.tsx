import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconRadio = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 3l-9.371 3.749a1 1 0 0 0 -.629 .928v11.323a1 1 0 0 0 1 1h14a1 1 0 0 0 1 -1v-11a1 1 0 0 0 -1 -1h-14.5" />
      <path d="M4 12h16" />
      <path d="M7 12v-2" />
      <path d="M17 16v.01" />
      <path d="M13 16v.01" />
    </>
  ),
  displayName: 'IconRadio',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
