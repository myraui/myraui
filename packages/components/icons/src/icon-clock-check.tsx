import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconClockCheck = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20.942 13.021a9 9 0 1 0 -9.407 7.967" />
      <path d="M12 7v5l3 3" />
      <path d="M15 19l2 2l4 -4" />
    </>
  ),
  displayName: 'IconClockCheck',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
