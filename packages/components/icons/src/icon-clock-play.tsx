import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconClockPlay = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 7v5l2 2" />
      <path d="M17 22l5 -3l-5 -3z" />
      <path d="M13.017 20.943a9 9 0 1 1 7.831 -7.292" />
    </>
  ),
  displayName: 'IconClockPlay',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
