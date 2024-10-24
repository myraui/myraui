import { useThemeSwitcher, UseThemeSwitcherProps } from './use-theme-switcher';
import React from 'react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { themes } from '@myraui/react-utils';
import { IconCheck, IconChevronDown } from '@tabler/icons-react';
import { capitalize } from '@myraui/shared-utils';

export type ThemeSwitcherProps = UseThemeSwitcherProps;

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const { Component, mounted, getButtonProps, switcherType, theme, setTheme, ButtonIcon } = useThemeSwitcher({ ...props });

  if (!mounted || !theme) return null;

  return (
    <Dropdown as={Component}>
      <DropdownTrigger>
        <Button
          isIconOnly={switcherType === 'default'}
          fullWidth={switcherType === 'dropdown'}
          {...getButtonProps()}
          endContent={switcherType === 'dropdown' && <IconChevronDown />}
          className={switcherType === 'dropdown' ? 'justify-between' : ''}
        >
          {switcherType === 'default' && <ButtonIcon />}
          {switcherType === 'dropdown' ? <span>{capitalize(theme)}</span> : ''}
        </Button>
      </DropdownTrigger>
      <DropdownMenu items={Object.values(themes)} selectionMode="single">
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

ThemeSwitcher.displayName = 'MyraUI.ThemeSwitcher';

export default ThemeSwitcher;
