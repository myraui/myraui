import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterCaseUpper = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 19v-10.5a3.5 3.5 0 0 1 7 0v10.5" />
      <path d="M3 13h7" />
      <path d="M14 19v-10.5a3.5 3.5 0 0 1 7 0v10.5" />
      <path d="M14 13h7" />
    </>
  ),
  displayName: 'IconLetterCaseUpper',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
