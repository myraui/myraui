import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMailMinus = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 19h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8" />
      <path d="M16 19h6" />
      <path d="M3 7l9 6l9 -6" />
    </>
  ),
  displayName: 'IconMailMinus',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
