import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMoodMinus = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20.48 15.014a9 9 0 1 0 -7.956 5.97" />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
      <path d="M16 19h6" />
      <path d="M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1" />
    </>
  ),
  displayName: 'IconMoodMinus',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
