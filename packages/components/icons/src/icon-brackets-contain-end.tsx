import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBracketsContainEnd = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 4h4v16h-4" />
      <path d="M5 16h.01" />
      <path d="M9 16h.01" />
      <path d="M13 16h.01" />
    </>
  ),
  displayName: 'IconBracketsContainEnd',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
