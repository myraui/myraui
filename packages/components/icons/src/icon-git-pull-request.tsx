import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconGitPullRequest = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M6 8l0 8" />
      <path d="M11 6h5a2 2 0 0 1 2 2v8" />
      <path d="M14 9l-3 -3l3 -3" />
    </>
  ),
  displayName: 'IconGitPullRequest',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
