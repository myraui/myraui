import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowDownToArc = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3v12" />
      <path d="M16 11l-4 4l-4 -4" />
      <path d="M3 12a9 9 0 0 0 18 0" />
    </>
  ),
  displayName: 'IconArrowDownToArc',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
