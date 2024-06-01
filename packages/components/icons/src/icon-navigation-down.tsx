import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconNavigationDown = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16.528 12.815l-4.528 -9.815l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463" />
      <path d="M19 16v6" />
      <path d="M22 19l-3 3l-3 -3" />
    </>
  ),
  displayName: 'IconNavigationDown',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
