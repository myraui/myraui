import { IconMoon, IconProps, IconSettings, IconSun } from '@tabler/icons-react';
import React from 'react';

export type ThemeValue = 'light' | 'dark' | 'system';

export interface Theme {
  label: string;
  value: ThemeValue;
  icon: React.FC<IconProps>;
}

export const themes: Record<ThemeValue, Theme> = {
  light: { label: 'Light', value: 'light', icon: IconSun },
  dark: { label: 'Dark', value: 'dark', icon: IconMoon },
  system: { label: 'System', value: 'system', icon: IconSettings },
};
