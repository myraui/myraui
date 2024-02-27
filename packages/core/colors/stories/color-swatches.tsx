import React from 'react';
import { ColorMode, MyraColor } from '../src/color-types';
import { getByColorMode } from '../src/utils';

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const mainColors = [
  'gray',
  'mauve',
  'slate',
  'sage',
  'olive',
  'sand',
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'bronze',
  'gold',
  'brown',
  'orange',
  'amber',
  'yellow',
  'lime',
  'mint',
  'sky',
] as MyraColor[];

export const ColorModeSwitch: React.FC<ColorModeSwitchProps> = ({ colorMode, onToggle }) => {
  return (
    <label className="inline-flex items-center mb-5 cursor-pointer">
      <input type="checkbox" checked={colorMode === 'dark'} className="sr-only peer" onChange={onToggle} />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ms-3 text-sm font-medium p-2">{capitalize(colorMode)} Mode</span>
    </label>
  );
};

interface ColorModeSwitchProps {
  colorMode: ColorMode;
  onToggle: () => void;
}

export const ColorSwatches: React.FC<ColorSwatchesProps> = (props) => {
  const [colorMode, setColorMode] = React.useState<ColorMode>(props.initialColorMode || 'dark');
  const colors = getByColorMode(colorMode);

  return (
    <div className={`flex flex-col gap-2 p-8 ${colorMode === 'dark' ? 'bg-black text-gray-100' : 'bg-white text-gray-900'}`}>
      <div>
        <ColorModeSwitch colorMode={colorMode} onToggle={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')} />
      </div>
      <div className="grid grid-cols-13 h-8 text-center">
        <div className="col-start-2 col-span-2 border-b border-b-1">Backgrounds</div>
        <div className="col-span-3">Interactive Components</div>
        <div className="col-span-3">Borders and separators</div>
        <div className="col-span-2">Solid colors</div>
        <div className="col-span-2">Accessible Text</div>
      </div>
      <div className="grid grid-cols-13 h-12 items-center justify-items-center">
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <div className={i === 0 ? 'col-start-2' : ''}>{i + 1}</div>
          ))}
      </div>
      <div className="flex flex-col gap-1">
        {mainColors.map((color) => {
          return (
            <div className="grid grid-cols-13 h-14 gap-1">
              <div className="self-center">{capitalize(color)}</div>
              {Object.values(colors[color]).map((colorValue) => {
                return <div style={{ background: colorValue }}></div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface ColorSwatchesProps {
  initialColorMode?: ColorMode;
}
