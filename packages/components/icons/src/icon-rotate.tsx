import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconRotate = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" />
    </>
  ),
  displayName: 'IconRotate',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
