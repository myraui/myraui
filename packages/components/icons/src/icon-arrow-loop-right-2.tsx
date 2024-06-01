import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowLoopRight2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21v-6m0 -6v-1a4 4 0 1 0 -4 4h13" />
      <path d="M17 16l4 -4l-4 -4" />
    </>
  ),
  displayName: 'IconArrowLoopRight2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
