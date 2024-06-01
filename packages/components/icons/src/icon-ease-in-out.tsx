import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconEaseInOut = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 20c8 0 10 -16 18 -16" />
    </>
  ),
  displayName: 'IconEaseInOut',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
