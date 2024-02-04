import { cn } from '@myra-ui/react';
import React, { useRef } from 'react';
import { useTheme } from 'next-themes';
import { useColorPalette } from '@myra-ui/use-color-palette';

const backgrounds = [
  'bg-blue-1',
  'bg-blue-2',
  'bg-blue-3',
  'bg-blue-4',
  'bg-blue-5',
  'bg-blue-6',
  'bg-blue-7',
  'bg-blue-8',
  'bg-blue-9',
  'bg-blue-10',
  'bg-blue-11',
  'bg-blue-12',
];

export const Testing: React.FC<TestingProps> = (props) => {
  const ref = useRef(null);
  const { theme, setTheme } = useTheme();

  const palette = useColorPalette(ref.current);

  console.log(palette);

  return (
    <div className="h-screen flex flex-col" ref={ref}>
      {theme && (
        <div className="h-12 text-white bg-black items-center justify-center flex">
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme[0].toUpperCase() + theme.slice(1)}</button>
        </div>
      )}
      <div className="grid grid-cols-12 flex-1">
        {Array(12)
          .fill(0)
          .map((_, index) => {
            return (
              <div key={index} className={cn('flex items-center justify-center text-foreground-12', backgrounds[index])}>
                {index + 1}
              </div>
            );
          })}
      </div>
      <div className="h-24 grid grid-cols-3">
        <div className="items-center justify-center flex bg-neutral-8">Neutral</div>
        <div className="items-center justify-center flex bg-action-8">Action</div>
        <div className="items-center justify-center flex bg-foreground-8">Foreground</div>
      </div>
    </div>
  );
};

interface TestingProps {
  colorScheme: string;
}
