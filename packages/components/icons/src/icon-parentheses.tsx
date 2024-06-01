import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconParentheses = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 4a12.25 12.25 0 0 0 0 16" />
      <path d="M17 4a12.25 12.25 0 0 1 0 16" />
    </>
  ),
  displayName: 'IconParentheses',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
