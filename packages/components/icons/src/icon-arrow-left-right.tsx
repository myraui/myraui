import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowLeftRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 13l4 -4l-4 -4" />
      <path d="M7 13l-4 -4l4 -4" />
      <path d="M12 14a5 5 0 0 1 5 -5h4" />
      <path d="M12 19v-5a5 5 0 0 0 -5 -5h-4" />
    </>
  ),
  displayName: 'IconArrowLeftRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
