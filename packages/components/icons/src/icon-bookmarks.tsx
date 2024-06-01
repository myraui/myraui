import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBookmarks = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z" />
      <path d="M11 3h5a3 3 0 0 1 3 3v11" />
    </>
  ),
  displayName: 'IconBookmarks',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
