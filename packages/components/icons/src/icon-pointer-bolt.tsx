import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPointerBolt = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16.044 13.488l-1.266 -1.266l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l1.678 1.678" />
      <path d="M19 16l-2 3h4l-2 3" />
    </>
  ),
  displayName: 'IconPointerBolt',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
