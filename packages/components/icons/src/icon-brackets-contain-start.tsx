import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBracketsContainStart = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 4h-4v16h4" />
      <path d="M18 16h-.01" />
      <path d="M14 16h-.01" />
      <path d="M10 16h-.01" />
    </>
  ),
  displayName: 'IconBracketsContainStart',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
