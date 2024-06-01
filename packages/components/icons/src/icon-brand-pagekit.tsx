import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandPagekit = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12.077 20h-5.077v-16h11v14h-5.077" />
    </>
  ),
  displayName: 'IconBrandPagekit',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
