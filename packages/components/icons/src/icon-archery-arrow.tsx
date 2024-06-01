import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArcheryArrow = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 7v3h3l3 -3h-3v-3z" />
      <path d="M14 10l-9 9" />
      <path d="M5 15v4h4" />
    </>
  ),
  displayName: 'IconArcheryArrow',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
