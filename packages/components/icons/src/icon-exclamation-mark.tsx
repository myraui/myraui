import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconExclamationMark = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 19v.01" />
      <path d="M12 15v-10" />
    </>
  ),
  displayName: 'IconExclamationMark',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
