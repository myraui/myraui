import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAlarmAverage = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0" />
      <path d="M7 4l-2.75 2" />
      <path d="M17 4l2.75 2" />
      <path d="M8 13h1l2 3l2 -6l2 3h1" />
    </>
  ),
  displayName: 'IconAlarmAverage',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
