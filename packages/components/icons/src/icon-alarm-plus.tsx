import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAlarmPlus = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M7 4l-2.75 2" />
      <path d="M17 4l2.75 2" />
      <path d="M10 13h4" />
      <path d="M12 11v4" />
    </>
  ),
  displayName: 'IconAlarmPlus',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
