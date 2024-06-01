import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChevronLeftPipe = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 6v12" />
      <path d="M18 6l-6 6l6 6" />
    </>
  ),
  displayName: 'IconChevronLeftPipe',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
