declare module 'tailwindcss/lib/util/flattenColorPalette' {
  export default function flattenColorPalette(colors: Record<string, any>): Record<string, any>;
}

declare module 'tailwindcss/lib/util/withAlphaVariable' {
  export default function withAlphaVariable(value: { color: string; property: string; variable: string }): Record<string, string>;
}
