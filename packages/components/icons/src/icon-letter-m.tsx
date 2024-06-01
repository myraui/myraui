import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterM = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 20v-16l6 14l6 -14v16" />
    </>
  ),
  displayName: 'IconLetterM',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
