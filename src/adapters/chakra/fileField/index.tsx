import { Badge, Box, Button, Circle, Flex, IconButton, Stack, Text, Textarea } from "@chakra-ui/react";
import { Check, FileText, Pencil, Trash, Upload } from "lucide-react";
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
    <Stack gap="1">
      <input ref={inputRef} type="file" accept=".pdf" hidden aria-label={field.label} onChange={handleFileChange} />
      <Flex gap="3" align="flex-start" p="3" borderWidth="1px" rounded="l2" borderColor={error ? "border.error" : hasSavedFile ? "border.success" : "border"}>
        <Circle
          size="7"
          flexShrink="0"
          bg={hasSavedFile ? "green.solid" : "colorPalette.muted"}
          color={hasSavedFile ? "green.contrast" : "colorPalette.fg"}
          aria-hidden="true"
        >
          {hasSavedFile ? (
            <Check size={14} />
          ) : (
            <Text textStyle="xs" fontWeight="bold">
              {orderNumber}
            </Text>
          )}
        </Circle>
        <Stack gap="2" flex="1" minWidth="0">
          <Flex gap="2" align="center" justify="space-between" wrap="wrap">
            <Flex gap="2" align="center" minWidth="0">
              <Text textStyle="sm" fontWeight="medium" truncate>
                {field.label}
              </Text>
              {isRequired && !fileValue && (
                <Badge variant="outline" colorPalette="orange">
                  {labels.fileRequired}
                </Badge>
              )}
            </Flex>
            {fileValue ? (
              <Flex gap="1" align="center" minWidth="0">
                <Box color="colorPalette.fg" flexShrink="0">
                  <FileText size={16} />
                </Box>
                <Text textStyle="sm" truncate>
                  {fileValue.file.name}
                </Text>
                {!isEditing && !isReadOnly && (
                  <IconButton size="xs" variant="ghost" aria-label={labels.fileEditDescription} onClick={handleEditDescription}>
                    <Pencil />
                  </IconButton>
                )}
                {!isReadOnly && (
                  <IconButton size="xs" variant="ghost" colorPalette="red" aria-label={labels.fileRemove} onClick={handleRemove}>
                    <Trash />
                  </IconButton>
                )}
              </Flex>
            ) : (
              !isReadOnly && (
                <Button size="xs" variant="subtle" onClick={() => inputRef.current?.click()}>
                  <Upload />
                  {labels.fileAttach}
                </Button>
              )
            )}
          </Flex>
          {hasSavedFile && fileValue?.description && (
            <Text textStyle="sm" color="fg.muted">
              {fileValue.description}
            </Text>
          )}
          {fileValue && isEditing && (
            <Flex gap="2" align="flex-end">
              <Textarea
                size="sm"
                autoresize
                aria-label={labels.fileDescription}
                placeholder={labels.fileDescription}
                value={draftDescription}
                onChange={(event) => setDraftDescription(event.target.value)}
              />
              <Button size="xs" onClick={handleSaveDescription}>
                {labels.save}
              </Button>
            </Flex>
          )}
        </Stack>
      </Flex>
      {error && (
        <Text textStyle="xs" color="fg.error">
          {error}
        </Text>
      )}
    </Stack>
  );
};

export default FileField;
