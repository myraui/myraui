import { FieldValues, useForm as useBaseForm, UseFormProps as BaseUseFormProps, UseFormReturn as BaseUseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export interface UseFormProps<TFieldValues extends FieldValues = FieldValues, TContext = unknown>
  extends Omit<BaseUseFormProps<TFieldValues, TContext>, 'resolver'> {
  schema?: z.Schema<TFieldValues>;
}

export interface UseFormReturn<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues extends FieldValues | undefined = undefined,
> extends BaseUseFormReturn<TFieldValues, TContext, TTransformedValues> {}

export function useForm<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues extends FieldValues | undefined = undefined,
>({ mode = 'all', ...props }: UseFormProps<TFieldValues, TContext> = {}): UseFormReturn<TFieldValues, TContext, TTransformedValues> {
  return useBaseForm({
    mode,
    resolver: props.schema ? zodResolver(props.schema) : undefined,
  });
}
