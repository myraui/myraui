import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowsLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 7l18 0" />
      <path d="M6 20l-3 -3l3 -3" />
      <path d="M6 4l-3 3l3 3" />
      <path d="M3 17l18 0" />
    </>
  ),
  displayName: 'IconArrowsLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
