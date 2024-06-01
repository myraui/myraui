import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDualScreen = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 4l8 3v15l-8 -3z" />
      <path d="M13 19h6v-15h-14" />
    </>
  ),
  displayName: 'IconDualScreen',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
