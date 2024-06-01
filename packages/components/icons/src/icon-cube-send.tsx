import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCubeSend = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 12.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
      <path d="M11 9.5v5.5l5 3" />
      <path d="M16 12.545l5 -3.03" />
      <path d="M7 9h-5" />
      <path d="M7 12h-3" />
      <path d="M7 15h-1" />
    </>
  ),
  displayName: 'IconCubeSend',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
