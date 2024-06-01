import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconClockX = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20.926 13.15a9 9 0 1 0 -7.835 7.784" />
      <path d="M12 7v5l2 2" />
      <path d="M22 22l-5 -5" />
      <path d="M17 22l5 -5" />
    </>
  ),
  displayName: 'IconClockX',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
