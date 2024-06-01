import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconFoldDown = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 11v8l3 -3m-6 0l3 3" />
      <path d="M9 7l1 0" />
      <path d="M14 7l1 0" />
      <path d="M19 7l1 0" />
      <path d="M4 7l1 0" />
    </>
  ),
  displayName: 'IconFoldDown',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
