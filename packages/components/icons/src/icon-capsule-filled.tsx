import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCapsuleFilled = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2l-.243 .004a7.004 7.004 0 0 0 -6.757 6.996v6a7 7 0 0 0 7 7l.243 -.004a7.004 7.004 0 0 0 6.757 -6.996v-6a7 7 0 0 0 -7 -7z"
        fill="currentColor"
        style={{ strokeWidth: 'var(--myraui-icon-stroke-width, 0' }}
      />
    </>
  ),
  displayName: 'IconCapsuleFilled',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
