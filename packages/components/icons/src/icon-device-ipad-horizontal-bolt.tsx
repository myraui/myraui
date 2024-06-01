import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceIpadHorizontalBolt = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6.5" />
      <path d="M9 17h4.5" />
      <path d="M19 16l-2 3h4l-2 3" />
    </>
  ),
  displayName: 'IconDeviceIpadHorizontalBolt',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
