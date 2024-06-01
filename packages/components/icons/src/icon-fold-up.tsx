import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconFoldUp = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 13v-8l-3 3m6 0l-3 -3" />
      <path d="M9 17l1 0" />
      <path d="M14 17l1 0" />
      <path d="M19 17l1 0" />
      <path d="M4 17l1 0" />
    </>
  ),
  displayName: 'IconFoldUp',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
