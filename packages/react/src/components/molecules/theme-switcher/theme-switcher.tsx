import React, { useEffect, useMemo, useState } from 'react';
import { Button, ButtonProps, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { IconCheck, IconProps } from '@tabler/icons-react';
import { themes } from 'packages/utilities/react-utils';
import { useTheme } from 'next-themes';

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const ButtonIcon = useMemo(() => {
    return theme === 'light' ? themes.light.icon : themes.dark.icon;
  }, [theme]);

  if (!mounted) return null;

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly {...props}>
          <ButtonIcon {...props.iconProps} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu items={Object.values(themes)}>
        {(item) => (
          <DropdownItem
            key={item.value}
            onClick={() => setTheme(item.value)}
            startContent={<item.icon />}
            endContent={theme === item.value && <IconCheck />}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export interface ThemeSwitcherProps extends ButtonProps {
  /**
   * The icon props of the theme switcher.
   */
  iconProps?: IconProps;
}

ThemeSwitcher.displayName = 'MyraUI.ThemeSwitcher';

export default ThemeSwitcher;
