import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconClockPlus = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20.984 12.535a9 9 0 1 0 -8.468 8.45" />
      <path d="M16 19h6" />
      <path d="M19 16v6" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  displayName: 'IconClockPlus',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
