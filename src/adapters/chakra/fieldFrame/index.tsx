import { Field } from "@chakra-ui/react";

import FieldLabel from "@adapters/chakra/fieldLabel";

import type { FieldFrameProps } from "./types";

const FieldFrame = ({ label, tooltip, hint, error, isRequired, isDisabled, isReadOnly, children }: FieldFrameProps) => (
  <Field.Root required={isRequired} invalid={Boolean(error)} disabled={isDisabled} readOnly={isReadOnly}>
    {label && (
      <Field.Label>
        <FieldLabel label={label} tooltip={tooltip} />
        <Field.RequiredIndicator />
      </Field.Label>
    )}
    {children}
    {hint && !error && <Field.HelperText>{hint}</Field.HelperText>}
    <Field.ErrorText>{error}</Field.ErrorText>
  </Field.Root>
);

export default FieldFrame;
