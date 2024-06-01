import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBoxAlignBottomLeftFilled = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M10 12h-5a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2 -2v-5a2 2 0 0 0 -2 -2z"
        fill="currentColor"
        style={{ strokeWidth: 'var(--myraui-icon-stroke-width, 0' }}
      />
    </>
  ),
  displayName: 'IconBoxAlignBottomLeftFilled',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
