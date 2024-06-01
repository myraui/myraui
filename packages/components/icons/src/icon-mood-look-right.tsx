import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMoodLookRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
      <path d="M15 9h-.01" />
      <path d="M20 15h-4" />
    </>
  ),
  displayName: 'IconMoodLookRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
