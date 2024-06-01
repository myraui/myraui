import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconNumber11Small = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 10l2 -2v8" />
      <path d="M14 10l2 -2v8" />
    </>
  ),
  displayName: 'IconNumber11Small',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
