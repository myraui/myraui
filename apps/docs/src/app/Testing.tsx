import { myra } from '@myraui/react';
import React from 'react';
import { useTheme } from 'next-themes';

export const Testing: React.FC<TestingProps> = (props) => {
  const { theme, setTheme } = useTheme();

  return (
    <myra.div className="h-screen flex flex-col p-2">
      {theme && (
        <div className="h-12 text-white bg-black items-center justify-center flex">
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme[0].toUpperCase() + theme.slice(1)}</button>
        </div>
      )}
      <div className="p-4">
        <myra.div className="dark:color-scheme/blue color-scheme-red">
          <div className="w-40 h-40 flex items-center justify-center bg-color-scheme p-4 rounded-md">
            <div className="">
              <div className="text-color-scheme-foreground">Inverted Hello World</div>
              <div className="text-color-scheme">Hello World</div>
            </div>
          </div>
        </myra.div>

        <p className="text-foreground">What is going on?</p>
      </div>
    </myra.div>
  );
};

interface TestingProps {
  colorScheme: string;
}
