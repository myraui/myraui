import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowUpTail = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 18l0 -15" />
      <path d="M15 6l-3 -3l-3 3" />
      <path d="M15 21l-3 -3l-3 3" />
    </>
  ),
  displayName: 'IconArrowUpTail',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
