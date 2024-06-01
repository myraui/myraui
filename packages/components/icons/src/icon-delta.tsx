import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDelta = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 20h16l-8 -16z" />
    </>
  ),
  displayName: 'IconDelta',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
