import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconGitCommit = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M12 3l0 6" />
      <path d="M12 15l0 6" />
    </>
  ),
  displayName: 'IconGitCommit',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
