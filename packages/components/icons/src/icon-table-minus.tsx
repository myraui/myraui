import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTableMinus = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10" />
      <path d="M3 10h18" />
      <path d="M10 3v18" />
      <path d="M16 19h6" />
    </>
  ),
  displayName: 'IconTableMinus',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
