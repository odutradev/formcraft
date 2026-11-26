import { Delete, Edit, PictureAsPdf, UploadFile } from "@mui/icons-material";
import { Collapse, FormHelperText, IconButton, TextField } from "@mui/material";
import { useRef, useState } from "react";

import {
  CheckIcon,
  DescriptionText,
  DescriptionWrapper,
  FileInfoStack,
  FileNameText,
  FileRow,
  FileRowContent,
  FileRowMainLine,
  FileUploadWrapper,
  HiddenFileInput,
  LabelText,
  OrderBadge,
  RequiredChip,
  SaveDescriptionButton
} from "./styles";
import useFormRuntime from "@hooks/useFormRuntime";

import type { FileFieldValue } from "@core/types";
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
    <FileUploadWrapper>
      <HiddenFileInput ref={inputRef} type="file" accept=".pdf" aria-label={field.label} onChange={handleFileChange} />
      <FileRow $hasError={Boolean(error)} $hasFile={hasSavedFile}>
        <OrderBadge $hasFile={hasSavedFile} aria-hidden="true">
          {hasSavedFile ? <CheckIcon /> : orderNumber}
        </OrderBadge>
        <FileRowContent>
          <FileRowMainLine>
            <LabelText variant="body2">{field.label}</LabelText>
            {isRequired && !fileValue && <RequiredChip label={labels.fileRequired} size="small" color="warning" variant="outlined" />}
            {fileValue ? (
              <FileInfoStack direction="row">
                <PictureAsPdf fontSize="small" color="primary" />
                <FileNameText variant="body2">{fileValue.file.name}</FileNameText>
                {!isEditing && !isReadOnly && (
                  <IconButton size="small" aria-label={labels.fileEditDescription} onClick={handleEditDescription}>
                    <Edit fontSize="small" />
                  </IconButton>
                )}
                {!isReadOnly && (
                  <IconButton size="small" aria-label={labels.fileRemove} onClick={handleRemove}>
                    <Delete fontSize="small" />
                  </IconButton>
                )}
              </FileInfoStack>
            ) : (
              !isReadOnly && (
                <IconButton size="small" color="primary" aria-label={labels.fileAttach} onClick={() => inputRef.current?.click()}>
                  <UploadFile fontSize="small" />
                </IconButton>
              )
            )}
          </FileRowMainLine>
          {hasSavedFile && fileValue?.description && <DescriptionText variant="body2">{fileValue.description}</DescriptionText>}
          <Collapse in={Boolean(fileValue) && isEditing}>
            <DescriptionWrapper>
              <TextField
                label={labels.fileDescription}
                value={draftDescription}
                onChange={(event) => setDraftDescription(event.target.value)}
                size="small"
                multiline
                rows={2}
                fullWidth
              />
              <SaveDescriptionButton variant="contained" size="small" onClick={handleSaveDescription}>
                {labels.save}
              </SaveDescriptionButton>
            </DescriptionWrapper>
          </Collapse>
        </FileRowContent>
      </FileRow>
      {error && <FormHelperText error>{error}</FormHelperText>}
    </FileUploadWrapper>
  );
};

export default FileField;
