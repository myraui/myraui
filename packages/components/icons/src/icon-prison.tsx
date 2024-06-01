import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPrison = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 4v16" />
      <path d="M14 4v16" />
      <path d="M6 4v5" />
      <path d="M6 15v5" />
      <path d="M10 4v5" />
      <path d="M11 9h-6v6h6z" />
      <path d="M10 15v5" />
      <path d="M8 12h-.01" />
    </>
  ),
  displayName: 'IconPrison',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
