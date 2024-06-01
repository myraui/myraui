import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceImacBolt = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13.5 17h-9.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8.5" />
      <path d="M3 13h13" />
      <path d="M8 21h5.5" />
      <path d="M10 17l-.5 4" />
      <path d="M19 16l-2 3h4l-2 3" />
    </>
  ),
  displayName: 'IconDeviceImacBolt',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
