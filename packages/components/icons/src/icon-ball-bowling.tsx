import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBallBowling = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M11 9l0 .01" />
      <path d="M15 8l0 .01" />
      <path d="M14 12l0 .01" />
    </>
  ),
  displayName: 'IconBallBowling',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
