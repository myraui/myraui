import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowsSplit = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M21 17h-8l-3.5 -5h-6.5" />
      <path d="M21 7h-8l-3.495 5" />
      <path d="M18 10l3 -3l-3 -3" />
      <path d="M18 20l3 -3l-3 -3" />
    </>
  ),
  displayName: 'IconArrowsSplit',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
