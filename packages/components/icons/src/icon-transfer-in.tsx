import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTransferIn = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 18v3h16v-14l-8 -4l-8 4v3" />
      <path d="M4 14h9" />
      <path d="M10 11l3 3l-3 3" />
    </>
  ),
  displayName: 'IconTransferIn',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
