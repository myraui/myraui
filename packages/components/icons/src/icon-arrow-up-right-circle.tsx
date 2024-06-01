import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowUpRightCircle = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8.464 15.536l9.536 -9.536" />
      <path d="M18 10v-4h-4" />
      <path d="M8.414 15.586a2 2 0 1 0 -2.828 2.828a2 2 0 0 0 2.828 -2.828" />
    </>
  ),
  displayName: 'IconArrowUpRightCircle',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
