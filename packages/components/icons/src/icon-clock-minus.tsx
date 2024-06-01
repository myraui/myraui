import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconClockMinus = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20.477 15.022a9 9 0 1 0 -7.998 5.965" />
      <path d="M12 7v5l3 3" />
      <path d="M16 19h6" />
    </>
  ),
  displayName: 'IconClockMinus',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
