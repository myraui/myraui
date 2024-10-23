import { useThemeToggler, UseThemeTogglerProps } from './use-theme-toggler';
import React from 'react';
import { forwardRef, RadioGroup } from '@nextui-org/react';
import { themes } from '@myraui/react-utils';
import { ThemeButton } from './theme-button';

export interface ThemeTogglerProps extends UseThemeTogglerProps {}

const ThemeToggler = forwardRef<'div', ThemeTogglerProps>((props, ref) => {
  const { Component, getThemeTogglerProps, getButtonProps, theme, setTheme } = useThemeToggler({ ...props, ref });

  return (
    <RadioGroup as={Component} {...getThemeTogglerProps()} ref={ref} value={theme} onValueChange={setTheme}>
      {Object.values(themes).map((key) => (
        <ThemeButton key={key.value} theme={key} {...getButtonProps()} />
      ))}
    </RadioGroup>
  );
});

ThemeToggler.displayName = 'MyraUI.ThemeToggler';

export default ThemeToggler;
