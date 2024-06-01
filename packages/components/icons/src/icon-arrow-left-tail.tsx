import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowLeftTail = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 12h-15" />
      <path d="M6 9l-3 3l3 3" />
      <path d="M21 9l-3 3l3 3" />
    </>
  ),
  displayName: 'IconArrowLeftTail',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
