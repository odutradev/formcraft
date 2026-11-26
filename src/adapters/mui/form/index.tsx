import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CircularProgress, Typography } from "@mui/material";
import "dayjs/locale/pt-br";

import { FormContainer, LoadingOverlay, StepContainer } from "./styles";
import useFormRuntime from "@hooks/useFormRuntime";

import type { FormProps } from "./types";

const Form = ({ header, isLoading, hasStepIndicator, children }: FormProps) => {
  const { labels } = useFormRuntime();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <FormContainer noValidate onSubmit={(event) => event.preventDefault()}>
        {header}
        <StepContainer $hasIndicator={hasStepIndicator}>{children}</StepContainer>
        {isLoading && (
          <LoadingOverlay role="status" aria-live="polite">
            <CircularProgress />
            <Typography variant="body1">{labels.processing}</Typography>
          </LoadingOverlay>
        )}
      </FormContainer>
    </LocalizationProvider>
  );
};

export default Form;
