import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChevronsUpRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 7h8v8" />
      <path d="M5 11h8v8" />
    </>
  ),
  displayName: 'IconChevronsUpRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
