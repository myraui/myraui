import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowBarToLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 12l10 0" />
      <path d="M10 12l4 4" />
      <path d="M10 12l4 -4" />
      <path d="M4 4l0 16" />
    </>
  ),
  displayName: 'IconArrowBarToLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
