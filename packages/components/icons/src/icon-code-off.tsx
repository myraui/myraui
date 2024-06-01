import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCodeOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 8l-4 4l4 4" />
      <path d="M17 8l4 4l-2.5 2.5" />
      <path d="M14 4l-1.201 4.805m-.802 3.207l-2 7.988" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconCodeOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
