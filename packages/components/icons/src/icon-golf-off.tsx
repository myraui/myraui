import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconGolfOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 18v-6m0 -4v-5l7 4l-5.07 2.897" />
      <path d="M9 17.67c-.62 .36 -1 .82 -1 1.33c0 1.1 1.8 2 4 2s4 -.9 4 -2c0 -.5 -.38 -.97 -1 -1.33" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconGolfOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
