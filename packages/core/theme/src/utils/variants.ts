import { RecordKey } from '@myra-ui/shared-utils';
import { Theme, ThemedRecord, ThemeRecord, VariantValue } from '../theme.types';
import deepMerge from 'deepmerge';

export function normalizeVariants<Variant extends RecordKey, Value>(variantValue: VariantValue<Variant, Value>): ThemeRecord<Variant, Value> {
  if (typeof variantValue === 'object') {
    return variantValue as ThemeRecord<Variant, Value>;
  }
  return {
    base: variantValue as Value,
  } as ThemeRecord<Variant, Value>;
}

export function getThemeValues<K extends RecordKey, Value>(record: ThemedRecord<K, Value>, theme: Theme): Partial<Record<K, Value>> {
  const resolved = normalizeVariants(record);

  const defaultValues = resolved.base || {};

  const themeValues = resolved[theme] || {};

  return deepMerge(defaultValues, themeValues) as Record<K, Value>;
}
