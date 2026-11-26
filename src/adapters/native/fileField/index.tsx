import { useId, useRef, useState } from "react";

import joinClassNames from "@adapters/native/functions/joinClassNames";
import useFormRuntime from "@core/hooks/useFormRuntime";
import Icon from "@adapters/native/icon";

import type { FileFieldValue } from "@core/types";
import type { FileFieldProps } from "./types";
import type { ChangeEvent } from "react";

const isFileValue = (value: unknown): value is FileFieldValue => value !== null && typeof value === "object" && "file" in value;

const FileField = ({ field, value, error, orderNumber, isRequired, isReadOnly, onChange }: FileFieldProps) => {
  const { labels } = useFormRuntime();
  const inputRef = useRef<HTMLInputElement>(null);
  const [draftDescription, setDraftDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const descriptionId = useId();

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
    <div className="msf-file">
      <input ref={inputRef} className="msf-visually-hidden" type="file" accept=".pdf" tabIndex={-1} aria-label={field.label} onChange={handleFileChange} />
      <div className={joinClassNames("msf-file-row", hasSavedFile && "msf-file-row--done", error && "msf-file-row--invalid")}>
        <span className="msf-file-badge" aria-hidden="true">
          {hasSavedFile ? <Icon name="check" /> : orderNumber}
        </span>
        <div className="msf-file-content">
          <div className="msf-file-main">
            <span className="msf-file-label">{field.label}</span>
            {isRequired && !fileValue && <span className="msf-badge">{labels.fileRequired}</span>}
            {fileValue && (
              <span className="msf-file-info">
                <Icon name="file" />
                <span className="msf-file-name">{fileValue.file.name}</span>
                {!isEditing && !isReadOnly && (
                  <button type="button" className="msf-icon-button" aria-label={labels.fileEditDescription} onClick={handleEditDescription}>
                    <Icon name="edit" />
                  </button>
                )}
                {!isReadOnly && (
                  <button type="button" className="msf-icon-button msf-icon-button--danger" aria-label={labels.fileRemove} onClick={handleRemove}>
                    <Icon name="delete" />
                  </button>
                )}
              </span>
            )}
            {!fileValue && !isReadOnly && (
              <button
                type="button"
                className="msf-button msf-button--outlined msf-button--primary msf-button--small"
                title={labels.fileAttach}
                onClick={() => inputRef.current?.click()}
              >
                <Icon name="upload" />
                <span className="msf-file-attach-label">{labels.fileAttach}</span>
              </button>
            )}
          </div>
          {hasSavedFile && fileValue?.description && <p className="msf-file-description">{fileValue.description}</p>}
          {fileValue && isEditing && (
            <div className="msf-file-editor">
              <label className="msf-label" htmlFor={descriptionId}>
                {labels.fileDescription}
              </label>
              <div className="msf-control">
                <textarea
                  id={descriptionId}
                  className="msf-input"
                  rows={2}
                  value={draftDescription}
                  onChange={(event) => setDraftDescription(event.target.value)}
                />
              </div>
              <button type="button" className="msf-button msf-button--contained msf-button--primary msf-button--small" onClick={handleSaveDescription}>
                {labels.save}
              </button>
            </div>
          )}
        </div>
      </div>
      {error && <p className="msf-helper msf-helper--error">{error}</p>}
    </div>
  );
};

export default FileField;
