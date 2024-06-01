import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceDesktopPause = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 16h-9a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" />
      <path d="M17 17v5" />
      <path d="M21 17v5" />
      <path d="M7 20h6" />
      <path d="M9 16v4" />
    </>
  ),
  displayName: 'IconDeviceDesktopPause',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
