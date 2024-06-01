import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowBarBoth = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 12h-6" />
      <path d="M5 15l-3 -3l3 -3" />
      <path d="M22 12h-6" />
      <path d="M19 15l3 -3l-3 -3" />
      <path d="M12 4v16" />
    </>
  ),
  displayName: 'IconArrowBarBoth',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
