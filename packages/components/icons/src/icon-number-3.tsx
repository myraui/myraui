import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconNumber3 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12a4 4 0 1 0 -4 -4" />
      <path d="M8 16a4 4 0 1 0 4 -4" />
    </>
  ),
  displayName: 'IconNumber3',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
