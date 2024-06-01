import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconEaseOut = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 20s10 -16 18 -16" />
    </>
  ),
  displayName: 'IconEaseOut',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
