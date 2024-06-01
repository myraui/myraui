import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowDownLeftCircle = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15.536 8.464l-9.536 9.536" />
      <path d="M6 14v4h4" />
      <path d="M15.586 8.414a2 2 0 1 0 2.828 -2.828a2 2 0 0 0 -2.828 2.828" />
    </>
  ),
  displayName: 'IconArrowDownLeftCircle',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
