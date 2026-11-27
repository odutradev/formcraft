import { FileText, Pencil, Trash, Upload } from "lucide-react";
import { Badge, Button, Textarea } from "enchase";
import { CheckIcon } from "enchase/icons";
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
    <div className="fc-enchase-file-field">
      <input ref={inputRef} type="file" accept=".pdf" hidden aria-label={field.label} onChange={handleFileChange} />
      <div className="fc-enchase-file" data-error={error ? true : undefined} data-done={hasSavedFile || undefined}>
        <span className="fc-enchase-file-order" aria-hidden="true">
          {hasSavedFile ? <CheckIcon size={14} /> : orderNumber}
        </span>
        <div className="fc-enchase-file-content">
          <div className="fc-enchase-file-line">
            <div className="fc-enchase-file-title">
              <strong>{field.label}</strong>
              {isRequired && !fileValue && (
                <Badge variant="warning" size="sm">
                  {labels.fileRequired}
                </Badge>
              )}
            </div>
            {fileValue ? (
              <div className="fc-enchase-file-title">
                <FileText size={16} className="fc-enchase-file-icon" aria-hidden="true" />
                <span className="fc-enchase-file-name">{fileValue.file.name}</span>
                {!isEditing && !isReadOnly && (
                  <Button variant="ghost" size="sm" iconOnly aria-label={labels.fileEditDescription} onClick={handleEditDescription}>
                    <Pencil size={16} aria-hidden="true" />
                  </Button>
                )}
                {!isReadOnly && (
                  <Button variant="ghost" size="sm" iconOnly aria-label={labels.fileRemove} onClick={handleRemove}>
                    <Trash size={16} aria-hidden="true" />
                  </Button>
                )}
              </div>
            ) : (
              !isReadOnly && (
                <Button variant="outline" size="sm" onClick={() => inputRef.current?.click()}>
                  <Upload size={16} aria-hidden="true" />
                  {labels.fileAttach}
                </Button>
              )
            )}
          </div>
          {hasSavedFile && fileValue?.description && <p className="fc-enchase-muted">{fileValue.description}</p>}
          {fileValue && isEditing && (
            <div className="fc-enchase-file-description">
              <Textarea
                fullWidth
                label={labels.fileDescription}
                rows={2}
                value={draftDescription}
                onChange={(event) => setDraftDescription(event.target.value)}
              />
              <Button size="sm" onClick={handleSaveDescription}>
                {labels.save}
              </Button>
            </div>
          )}
        </div>
      </div>
      {error && (
        <p className="fc-enchase-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default FileField;
