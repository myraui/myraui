import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowMergeLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 8l4 -4l4 4" />
      <path d="M12 20v-16" />
      <path d="M6 18c4 -1.333 6 -4.667 6 -10" />
    </>
  ),
  displayName: 'IconArrowMergeLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
