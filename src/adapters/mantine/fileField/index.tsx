import { ActionIcon, Badge, Button, Collapse, Group, Paper, Stack, Text, Textarea, ThemeIcon } from "@mantine/core";
import { IconCheck, IconFileTypePdf, IconPencil, IconTrash, IconUpload } from "@tabler/icons-react";
import { useRef, useState } from "react";

import useFormRuntime from "@hooks/useFormRuntime";

import type { FileFieldValue } from "@typings";
import type { FileFieldProps } from "./types";
import type { ChangeEvent } from "react";

const isFileValue = (value: unknown): value is FileFieldValue => value !== null && typeof value === "object" && "file" in value;

const FileField = ({ field, value, error, orderNumber, isRequired, isReadOnly, onChange }: FileFieldProps) => {
  const { labels } = useFormRuntime();
  const inputRef = useRef<HTMLInputElement>(null);
  const [draftDescription, setDraftDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const fileValue = isFileValue(value) ? value : null;
  const hasSavedFile = Boolean(fileValue) && !isEditing;

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setDraftDescription(fileValue?.description ?? "");
    setIsEditing(true);
    onChange({ file, description: fileValue?.description ?? "" });
  };

  const handleRemove = () => {
    onChange(null);
    setDraftDescription("");
    setIsEditing(false);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleSaveDescription = () => {
    if (!fileValue) return;
    onChange({ ...fileValue, description: draftDescription });
    setIsEditing(false);
  };

  const handleEditDescription = () => {
    setDraftDescription(fileValue?.description ?? "");
    setIsEditing(true);
  };

  return (
    <Stack gap={4}>
      <input ref={inputRef} type="file" accept=".pdf" hidden aria-label={field.label} onChange={handleFileChange} />
      <Paper withBorder radius="md" p="sm" className="msf-mantine-file" data-error={error ? true : undefined} data-done={hasSavedFile || undefined}>
        <Group gap="sm" wrap="nowrap" align="flex-start">
          <ThemeIcon radius="xl" variant={hasSavedFile ? "filled" : "light"} color={hasSavedFile ? "teal" : undefined} aria-hidden="true">
            {hasSavedFile ? (
              <IconCheck size={16} />
            ) : (
              <Text size="xs" fw={700}>
                {orderNumber}
              </Text>
            )}
          </ThemeIcon>
          <Stack gap="xs" className="msf-mantine-file-content">
            <Group gap="xs" justify="space-between" wrap="wrap">
              <Group gap="xs" wrap="nowrap" className="msf-mantine-file-title">
                <Text size="sm" fw={500} truncate>
                  {field.label}
                </Text>
                {isRequired && !fileValue && (
                  <Badge variant="outline" color="orange" size="sm">
                    {labels.fileRequired}
                  </Badge>
                )}
              </Group>
              {fileValue ? (
                <Group gap={4} wrap="nowrap" className="msf-mantine-file-title">
                  <IconFileTypePdf size={18} className="msf-mantine-file-icon" />
                  <Text size="sm" truncate>
                    {fileValue.file.name}
                  </Text>
                  {!isEditing && !isReadOnly && (
                    <ActionIcon variant="subtle" color="gray" aria-label={labels.fileEditDescription} onClick={handleEditDescription}>
                      <IconPencil size={16} />
                    </ActionIcon>
                  )}
                  {!isReadOnly && (
                    <ActionIcon variant="subtle" color="red" aria-label={labels.fileRemove} onClick={handleRemove}>
                      <IconTrash size={16} />
                    </ActionIcon>
                  )}
                </Group>
              ) : (
                !isReadOnly && (
                  <Button size="xs" variant="light" leftSection={<IconUpload size={16} />} onClick={() => inputRef.current?.click()}>
                    {labels.fileAttach}
                  </Button>
                )
              )}
            </Group>
            {hasSavedFile && fileValue?.description && (
              <Text size="sm" c="dimmed">
                {fileValue.description}
              </Text>
            )}
            <Collapse expanded={Boolean(fileValue) && isEditing}>
              <Group gap="sm" align="flex-end" wrap="nowrap">
                <Textarea
                  label={labels.fileDescription}
                  value={draftDescription}
                  autosize
                  minRows={2}
                  className="msf-mantine-file-description"
                  onChange={(event) => setDraftDescription(event.currentTarget.value)}
                />
                <Button size="xs" onClick={handleSaveDescription}>
                  {labels.save}
                </Button>
              </Group>
            </Collapse>
          </Stack>
        </Group>
      </Paper>
      {error && (
        <Text size="xs" c="red">
          {error}
        </Text>
      )}
    </Stack>
  );
};

export default FileField;
