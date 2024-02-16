import { RecordKey } from '@myra-ui/shared-utils';
import { Theme, ThemedRecord, VariantRecord, VariantValue } from '../theme.types';
import deepMerge from 'deepmerge';

export function normalizeVariants<Variant extends RecordKey, Value>(variantValue: VariantValue<Variant, Value>): VariantRecord<Variant, Value> {
  if (typeof variantValue === 'object') {
    return variantValue as VariantRecord<Variant, Value>;
  }
  return {
    base: variantValue as Value,
  } as VariantRecord<Variant, Value>;
}

export function getThemeValues<K extends RecordKey, Value>(record: ThemedRecord<K, Value>, theme: Theme): Partial<Record<K, Value>> {
  const resolved = normalizeVariants(record);

  const defaultValues = resolved.base || {};

  const themeValues = resolved[theme] || {};

  return deepMerge(defaultValues, themeValues) as Record<K, Value>;
}
