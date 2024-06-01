import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowDownSquare = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 7v14" />
      <path d="M9 18l3 3l3 -3" />
      <path d="M14 3v4h-4v-4z" />
    </>
  ),
  displayName: 'IconArrowDownSquare',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
