import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowsExchange = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 10h14l-4 -4" />
      <path d="M17 14h-14l4 4" />
    </>
  ),
  displayName: 'IconArrowsExchange',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
