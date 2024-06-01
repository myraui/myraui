import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChevronsDownRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 5v8h-8" />
      <path d="M17 9v8h-8" />
    </>
  ),
  displayName: 'IconChevronsDownRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
