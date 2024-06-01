import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChevronRightPipe = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 6l6 6l-6 6" />
      <path d="M17 5v13" />
    </>
  ),
  displayName: 'IconChevronRightPipe',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
