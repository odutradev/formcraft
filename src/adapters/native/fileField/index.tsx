import { useId, useRef, useState } from "react";

import joinClassNames from "@adapters/native/functions/joinClassNames";
import useFormRuntime from "@hooks/useFormRuntime";
import Icon from "@adapters/native/icon";

import type { FileFieldValue } from "@typings";
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
    <div className="fc-file">
      <input ref={inputRef} className="fc-visually-hidden" type="file" accept=".pdf" tabIndex={-1} aria-label={field.label} onChange={handleFileChange} />
      <div className={joinClassNames("fc-file-row", hasSavedFile && "fc-file-row--done", error && "fc-file-row--invalid")}>
        <span className="fc-file-badge" aria-hidden="true">
          {hasSavedFile ? <Icon name="check" /> : orderNumber}
        </span>
        <div className="fc-file-content">
          <div className="fc-file-main">
            <span className="fc-file-label">{field.label}</span>
            {isRequired && !fileValue && <span className="fc-badge">{labels.fileRequired}</span>}
            {fileValue && (
              <span className="fc-file-info">
                <Icon name="file" />
                <span className="fc-file-name">{fileValue.file.name}</span>
                {!isEditing && !isReadOnly && (
                  <button type="button" className="fc-icon-button" aria-label={labels.fileEditDescription} onClick={handleEditDescription}>
                    <Icon name="edit" />
                  </button>
                )}
                {!isReadOnly && (
                  <button type="button" className="fc-icon-button fc-icon-button--danger" aria-label={labels.fileRemove} onClick={handleRemove}>
                    <Icon name="delete" />
                  </button>
                )}
              </span>
            )}
            {!fileValue && !isReadOnly && (
              <button
                type="button"
                className="fc-button fc-button--outlined fc-button--primary fc-button--small"
                title={labels.fileAttach}
                onClick={() => inputRef.current?.click()}
              >
                <Icon name="upload" />
                <span className="fc-file-attach-label">{labels.fileAttach}</span>
              </button>
            )}
          </div>
          {hasSavedFile && fileValue?.description && <p className="fc-file-description">{fileValue.description}</p>}
          {fileValue && isEditing && (
            <div className="fc-file-editor">
              <label className="fc-label" htmlFor={descriptionId}>
                {labels.fileDescription}
              </label>
              <div className="fc-control">
                <textarea
                  id={descriptionId}
                  className="fc-input"
                  rows={2}
                  value={draftDescription}
                  onChange={(event) => setDraftDescription(event.target.value)}
                />
              </div>
              <button type="button" className="fc-button fc-button--contained fc-button--primary fc-button--small" onClick={handleSaveDescription}>
                {labels.save}
              </button>
            </div>
          )}
        </div>
      </div>
      {error && <p className="fc-helper fc-helper--error">{error}</p>}
    </div>
  );
};

export default FileField;
