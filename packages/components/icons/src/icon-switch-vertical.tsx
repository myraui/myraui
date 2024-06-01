import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSwitchVertical = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 8l4 -4l4 4" />
      <path d="M7 4l0 9" />
      <path d="M13 16l4 4l4 -4" />
      <path d="M17 10l0 10" />
    </>
  ),
  displayName: 'IconSwitchVertical',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
