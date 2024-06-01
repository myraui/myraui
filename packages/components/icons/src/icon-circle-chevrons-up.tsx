import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCircleChevronsUp = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 15l3 -3l3 3" />
      <path d="M9 11l3 -3l3 3" />
      <path d="M12 21a9 9 0 1 0 -.265 0l.265 0z" />
    </>
  ),
  displayName: 'IconCircleChevronsUp',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
