import { ResolvedValue } from '../resolvers';

export function isResolvedValue(value: any): value is ResolvedValue<any> {
  return typeof value === 'object' && 'value' in value && 'utilities' in value && Array.isArray(value.utilities) && Object.keys(value).length === 2;
}
