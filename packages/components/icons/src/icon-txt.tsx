import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTxt = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 8h4" />
      <path d="M5 8v8" />
      <path d="M17 8h4" />
      <path d="M19 8v8" />
      <path d="M10 8l4 8" />
      <path d="M10 16l4 -8" />
    </>
  ),
  displayName: 'IconTxt',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
