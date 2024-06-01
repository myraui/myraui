import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTransferVertical = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 4v16l-6 -5.5" />
      <path d="M14 20v-16l6 5.5" />
    </>
  ),
  displayName: 'IconTransferVertical',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
