import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceDesktopCheck = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 16h-8a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" />
      <path d="M15 19l2 2l4 -4" />
      <path d="M7 20h4" />
      <path d="M9 16v4" />
    </>
  ),
  displayName: 'IconDeviceDesktopCheck',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
