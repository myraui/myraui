import { RecordKey } from '@myra-ui/shared-utils';
import { SemanticRecord, Theme, VariantRecord, VariantValue } from '../theme.types';
import deepMerge from 'deepmerge';

export function resolveVariantValue<Variant extends RecordKey, Value>(variantValue: VariantValue<Variant, Value>): VariantRecord<Variant, Value> {
  if (typeof variantValue === 'object') {
    return variantValue as VariantRecord<Variant, Value>;
  }
  return {
    DEFAULT: variantValue as Value,
  } as VariantRecord<Variant, Value>;
}

export function getThemeValues<K extends RecordKey, Value>(record: SemanticRecord<K, Value>, theme: Theme): Partial<Record<K, Value>> {
  const resolved = resolveVariantValue(record);

  const defaultValues = resolved.DEFAULT || {};

  const themeValues = resolved[theme] || {};

  return deepMerge(defaultValues, themeValues) as Record<K, Value>;
}
