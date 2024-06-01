import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceMobilePause = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
      <path d="M17 17v5" />
      <path d="M21 17v5" />
      <path d="M11 4h2" />
      <path d="M12 17v.01" />
    </>
  ),
  displayName: 'IconDeviceMobilePause',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
