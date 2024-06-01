import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconGitCherryPick = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M7 3v6" />
      <path d="M7 15v6" />
      <path d="M13 7h2.5l1.5 5l-1.5 5h-2.5" />
      <path d="M17 12h3" />
    </>
  ),
  displayName: 'IconGitCherryPick',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
