import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCodeCircle2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8.5 13.5l-1.5 -1.5l1.5 -1.5" />
      <path d="M15.5 10.5l1.5 1.5l-1.5 1.5" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M13 9.5l-2 5.5" />
    </>
  ),
  displayName: 'IconCodeCircle2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
