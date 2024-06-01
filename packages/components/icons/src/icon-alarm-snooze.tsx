import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAlarmSnooze = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M10 11h4l-4 4h4" />
      <path d="M7 4l-2.75 2" />
      <path d="M17 4l2.75 2" />
    </>
  ),
  displayName: 'IconAlarmSnooze',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
