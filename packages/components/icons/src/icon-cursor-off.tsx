import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCursorOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 4a3 3 0 0 1 3 3v1m0 9a3 3 0 0 1 -3 3" />
      <path d="M15 4a3 3 0 0 0 -3 3v1m0 4v5a3 3 0 0 0 3 3" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconCursorOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
