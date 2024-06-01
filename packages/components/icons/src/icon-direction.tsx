import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDirection = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 10l3 -3l3 3" />
      <path d="M9 14l3 3l3 -3" />
    </>
  ),
  displayName: 'IconDirection',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
