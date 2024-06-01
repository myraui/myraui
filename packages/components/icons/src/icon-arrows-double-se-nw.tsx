import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowsDoubleSeNw = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 10l11 11" />
      <path d="M14 17v4h-4" />
      <path d="M14 3h-4v4" />
      <path d="M21 14l-11 -11" />
    </>
  ),
  displayName: 'IconArrowsDoubleSeNw',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
