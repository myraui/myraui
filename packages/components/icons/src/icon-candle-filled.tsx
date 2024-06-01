import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCandleFilled = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M14 10h-4a2 2 0 0 0 -2 2v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1 -1v-9a2 2 0 0 0 -2 -2z"
        fill="currentColor"
        style={{ strokeWidth: 'var(--myraui-icon-stroke-width, 0' }}
      />
      <path
        d="M11.254 2.334l-1.55 1.737c-1.042 1.277 -.898 3.097 .296 4.166a3 3 0 0 0 4.196 -4.28l-1.452 -1.624a1 1 0 0 0 -1.491 .001z"
        fill="currentColor"
        style={{ strokeWidth: 'var(--myraui-icon-stroke-width, 0' }}
      />
    </>
  ),
  displayName: 'IconCandleFilled',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
