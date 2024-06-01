import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconRadiusTopRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 5h6a8 8 0 0 1 8 8v6" />
    </>
  ),
  displayName: 'IconRadiusTopRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
