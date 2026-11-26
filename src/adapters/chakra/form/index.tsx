import { Box, Center, Spinner, Stack, Text } from "@chakra-ui/react";

import useFormRuntime from "@hooks/useFormRuntime";

import type { FormProps } from "./types";

const Form = ({ header, isLoading, children }: FormProps) => {
  const { labels } = useFormRuntime();

  return (
    <Box asChild position="relative" width="full">
      <form noValidate onSubmit={(event) => event.preventDefault()}>
        <Stack gap="6">
          {header}
          <Stack gap="5">{children}</Stack>
        </Stack>
        {isLoading && (
          <Center position="absolute" inset="0" zIndex="docked" bg="bg/80" rounded="l3">
            <Stack align="center" gap="3" role="status" aria-live="polite">
              <Spinner size="lg" />
              <Text textStyle="sm">{labels.processing}</Text>
            </Stack>
          </Center>
        )}
      </form>
    </Box>
  );
};

export default Form;
