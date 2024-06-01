import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowLoopRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21v-13a4 4 0 1 0 -4 4h13" />
      <path d="M17 16l4 -4l-4 -4" />
    </>
  ),
  displayName: 'IconArrowLoopRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
