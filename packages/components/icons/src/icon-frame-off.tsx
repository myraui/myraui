import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconFrameOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 7h3m4 0h9" />
      <path d="M4 17h13" />
      <path d="M7 7v13" />
      <path d="M17 4v9m0 4v3" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconFrameOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
