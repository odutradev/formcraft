import { Box, Loader, LoadingOverlay, Stack, Text } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import "dayjs/locale/pt-br";

import stylesheet from "@adapters/mantine/stylesheet";
import useFormRuntime from "@hooks/useFormRuntime";

import type { FormLocale } from "@typings";
import type { FormProps } from "./types";

const dateLocales: Record<FormLocale, string> = { "pt-BR": "pt-br", en: "en" };

const Form = ({ header, isLoading, children }: FormProps) => {
  const { labels, locale } = useFormRuntime();

  const loader = (
    <Stack align="center" gap="sm" role="status" aria-live="polite">
      <Loader />
      <Text size="sm">{labels.processing}</Text>
    </Stack>
  );

  return (
    <DatesProvider settings={{ locale: dateLocales[locale] }}>
      <style href="multi-step-form-mantine" precedence="default">
        {stylesheet}
      </style>
      <Box component="form" noValidate pos="relative" className="msf-mantine-form" onSubmit={(event) => event.preventDefault()}>
        <Stack gap="xl">
          {header}
          <Stack gap="lg">{children}</Stack>
        </Stack>
        <LoadingOverlay visible={isLoading} overlayProps={{ blur: 2 }} loaderProps={{ children: loader }} />
      </Box>
    </DatesProvider>
  );
};

export default Form;
