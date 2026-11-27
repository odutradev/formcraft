import { CheckOutlined, DeleteOutlined, EditOutlined, FilePdfOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Input, Tag, Typography } from "antd";
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
    <div className="fc-antd-file-field">
      <input ref={inputRef} type="file" accept=".pdf" hidden aria-label={field.label} onChange={handleFileChange} />
      <div className="fc-antd-file" data-error={error ? true : undefined} data-done={hasSavedFile || undefined}>
        <span className="fc-antd-file-order" aria-hidden="true">
          {hasSavedFile ? <CheckOutlined /> : orderNumber}
        </span>
        <div className="fc-antd-file-content">
          <div className="fc-antd-file-line">
            <div className="fc-antd-file-title">
              <Typography.Text strong ellipsis>
                {field.label}
              </Typography.Text>
              {isRequired && !fileValue && <Tag color="warning">{labels.fileRequired}</Tag>}
            </div>
            {fileValue ? (
              <div className="fc-antd-file-title">
                <FilePdfOutlined className="fc-antd-file-icon" />
                <Typography.Text ellipsis>{fileValue.file.name}</Typography.Text>
                {!isEditing && !isReadOnly && (
                  <Button type="text" size="small" aria-label={labels.fileEditDescription} icon={<EditOutlined />} onClick={handleEditDescription} />
                )}
                {!isReadOnly && <Button type="text" size="small" danger aria-label={labels.fileRemove} icon={<DeleteOutlined />} onClick={handleRemove} />}
              </div>
            ) : (
              !isReadOnly && (
                <Button size="small" icon={<UploadOutlined />} onClick={() => inputRef.current?.click()}>
                  {labels.fileAttach}
                </Button>
              )
            )}
          </div>
          {hasSavedFile && fileValue?.description && <Typography.Text type="secondary">{fileValue.description}</Typography.Text>}
          {fileValue && isEditing && (
            <div className="fc-antd-file-description">
              <Input.TextArea
                aria-label={labels.fileDescription}
                placeholder={labels.fileDescription}
                value={draftDescription}
                autoSize={{ minRows: 2 }}
                onChange={(event) => setDraftDescription(event.target.value)}
              />
              <Button type="primary" size="small" onClick={handleSaveDescription}>
                {labels.save}
              </Button>
            </div>
          )}
        </div>
      </div>
      {error && <Typography.Text type="danger">{error}</Typography.Text>}
    </div>
  );
};

export default FileField;
