import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSeparatorVertical = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 4l0 16" />
      <path d="M8 8l-4 4l4 4" />
      <path d="M16 16l4 -4l-4 -4" />
    </>
  ),
  displayName: 'IconSeparatorVertical',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
