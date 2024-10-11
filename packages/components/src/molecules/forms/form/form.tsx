import React, { HTMLProps, PropsWithChildren } from 'react';
import { FieldValues, FormProvider, SubmitHandler } from 'react-hook-form';
import { UseFormReturn } from './use-form';

export interface FormProps<TFieldValues extends FieldValues, TContext = never, TTransformedValues extends FieldValues | undefined = undefined>
  extends Omit<HTMLProps<HTMLFormElement>, 'onSubmit' | 'form'> {
  /**
   * The form context. This is the return value of the `useForm` hook.
   */
  form: UseFormReturn<TFieldValues, TContext, TTransformedValues | undefined>;
  /**
   * The submit handler for the form. It will be called with the form values when the form is submitted.
   */
  onSubmit?: TTransformedValues extends undefined
    ? SubmitHandler<TFieldValues>
    : TTransformedValues extends FieldValues
      ? SubmitHandler<TTransformedValues>
      : never;
}

function Form<TFieldValues extends FieldValues, TContext = never, TTransformedValues extends FieldValues | undefined = undefined>({
  form,
  ...props
}: PropsWithChildren<FormProps<TFieldValues, TContext, TTransformedValues>>) {
  return (
    <FormProvider {...form}>
      <form {...props} onSubmit={props.onSubmit ? form.handleSubmit(props.onSubmit) : undefined} action={props.onSubmit ? undefined : props.action}>
        {props.children}
      </form>
    </FormProvider>
  );
}

Form.displayName = 'MyraUI.Form';

export default Form;
