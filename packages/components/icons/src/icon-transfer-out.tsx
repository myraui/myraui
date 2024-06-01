import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTransferOut = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 19v2h16v-14l-8 -4l-8 4v2" />
      <path d="M13 14h-9" />
      <path d="M7 11l-3 3l3 3" />
    </>
  ),
  displayName: 'IconTransferOut',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
