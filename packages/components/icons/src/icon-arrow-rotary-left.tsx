import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowRotaryLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6z" />
      <path d="M16 10v10" />
      <path d="M13 7h-10" />
      <path d="M7 11l-4 -4l4 -4" />
    </>
  ),
  displayName: 'IconArrowRotaryLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
