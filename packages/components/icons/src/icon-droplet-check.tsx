import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDropletCheck = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18.967 13.594a6.568 6.568 0 0 0 -.903 -2.717l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.125 7.125 0 0 0 4.04 1.565" />
      <path d="M15 19l2 2l4 -4" />
    </>
  ),
  displayName: 'IconDropletCheck',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
