import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconClockShare = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20.943 13.016a9 9 0 1 0 -8.915 7.984" />
      <path d="M16 22l5 -5" />
      <path d="M21 21.5v-4.5h-4.5" />
      <path d="M12 7v5l2 2" />
    </>
  ),
  displayName: 'IconClockShare',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
