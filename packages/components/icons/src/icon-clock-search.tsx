import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconClockSearch = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20.993 11.646a9 9 0 1 0 -9.318 9.348" />
      <path d="M12 7v5l1 1" />
      <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M20.2 20.2l1.8 1.8" />
    </>
  ),
  displayName: 'IconClockSearch',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
