import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowsDoubleNwSe = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 21l-11 -11" />
      <path d="M3 14v-4h4" />
      <path d="M17 14h4v-4" />
      <path d="M10 3l11 11" />
    </>
  ),
  displayName: 'IconArrowsDoubleNwSe',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
