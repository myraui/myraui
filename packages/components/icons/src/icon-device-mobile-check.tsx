import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceMobileCheck = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v9.5" />
      <path d="M11 4h2" />
      <path d="M12 17v.01" />
      <path d="M15 19l2 2l4 -4" />
    </>
  ),
  displayName: 'IconDeviceMobileCheck',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
