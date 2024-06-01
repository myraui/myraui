import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconClockStop = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M21 12a9 9 0 1 0 -9 9" />
      <path d="M12 7v5l1 1" />
      <path d="M16 16h6v6h-6z" />
    </>
  ),
  displayName: 'IconClockStop',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
