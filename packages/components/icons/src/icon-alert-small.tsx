import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAlertSmall = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </>
  ),
  displayName: 'IconAlertSmall',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
