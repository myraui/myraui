import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowsDoubleNeSw = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 14l11 -11" />
      <path d="M10 3h4v4" />
      <path d="M10 17v4h4" />
      <path d="M21 10l-11 11" />
    </>
  ),
  displayName: 'IconArrowsDoubleNeSw',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
