import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconElevatorOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 4h10a1 1 0 0 1 1 1v10m0 4a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-14" />
      <path d="M12 8l2 2" />
      <path d="M10 14l2 2l2 -2" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconElevatorOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
