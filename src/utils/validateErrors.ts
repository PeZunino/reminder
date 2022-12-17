import { ValidationError } from "yup";

interface Errors {
  [key: string]: string;
}

export default function ValidateErrors(errs: ValidationError): Errors {
  const validatedErrors: Errors = {};

  errs.inner.forEach(
    err => (validatedErrors[err.path as string] = err.message),
  );

  return validatedErrors;
}
