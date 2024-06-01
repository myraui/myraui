import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMoodXd = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <path d="M9 14h6a3 3 0 0 1 -6 0z" />
      <path d="M9 8l6 3" />
      <path d="M9 11l6 -3" />
    </>
  ),
  displayName: 'IconMoodXd',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
