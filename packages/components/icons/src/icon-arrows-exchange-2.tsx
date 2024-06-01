import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowsExchange2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 10h-14l4 -4" />
      <path d="M7 14h14l-4 4" />
    </>
  ),
  displayName: 'IconArrowsExchange2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
