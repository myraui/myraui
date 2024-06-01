import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowBearLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 3h-5v5" />
      <path d="M8 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93" />
    </>
  ),
  displayName: 'IconArrowBearLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
