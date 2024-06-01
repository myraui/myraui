import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDirectionHorizontal = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 9l-3 3l3 3" />
      <path d="M14 9l3 3l-3 3" />
    </>
  ),
  displayName: 'IconDirectionHorizontal',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
