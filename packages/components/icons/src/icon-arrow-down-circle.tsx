import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowDownCircle = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 7v14" />
      <path d="M9 18l3 3l3 -3" />
      <path d="M12 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4" />
    </>
  ),
  displayName: 'IconArrowDownCircle',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
