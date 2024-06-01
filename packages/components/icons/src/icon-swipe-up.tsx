import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSwipeUp = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 16m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M12 12v-8" />
      <path d="M9 7l3 -3l3 3" />
    </>
  ),
  displayName: 'IconSwipeUp',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
