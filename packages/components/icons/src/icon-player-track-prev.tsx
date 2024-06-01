import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPlayerTrackPrev = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M21 5v14l-8 -7z" />
      <path d="M10 5v14l-8 -7z" />
    </>
  ),
  displayName: 'IconPlayerTrackPrev',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
