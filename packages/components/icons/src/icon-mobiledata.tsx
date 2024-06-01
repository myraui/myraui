import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMobiledata = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 12v-8" />
      <path d="M8 20v-8" />
      <path d="M13 7l3 -3l3 3" />
      <path d="M5 17l3 3l3 -3" />
    </>
  ),
  displayName: 'IconMobiledata',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
