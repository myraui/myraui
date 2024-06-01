import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSolarElectricity = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6.28v11.44a1 1 0 0 0 1.243 .97l6 -1.5a1 1 0 0 0 .757 -.97v-8.44a1 1 0 0 0 -.757 -.97l-6 -1.5a1 1 0 0 0 -1.243 .97z" />
      <path d="M8 6v12" />
      <path d="M12 12h-8" />
      <path d="M20 7l-3 5h4l-3 5" />
    </>
  ),
  displayName: 'IconSolarElectricity',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
