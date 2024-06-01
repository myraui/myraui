import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconHeartUp = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 20l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.893 6.139" />
      <path d="M19 22v-6" />
      <path d="M22 19l-3 -3l-3 3" />
    </>
  ),
  displayName: 'IconHeartUp',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
