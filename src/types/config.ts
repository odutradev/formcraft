import type { ActionContext, FormRow, FormValues, Resolvable } from "@/types/values";
import type { ReactNode } from "react";

export type InputFieldType = "text" | "number" | "email" | "select" | "autocomplete" | "tags" | "date" | "currency" | "percentage" | "file";

export type MessageFieldType = "info" | "error" | "warning";

export type FieldType = InputFieldType | MessageFieldType | "divider" | "button" | "table";

export type ButtonVariant = "text" | "outlined" | "contained";

export interface FieldOption {
  label: string;
  value: string;
}

export interface FieldValidation {
  message: string;
  pattern: string;
}

export interface FileFieldValue {
  description: string;
  file: File;
}

export interface SearchResultColumn {
  header: string;
  key: string;
}

export interface TreeConfig {
  childrenKey: string;
  labelKey: string;
  valueKey: string;
}

export interface SearchConfig {
  onSearch: (filters: FormValues) => Promise<FormRow[]>;
  onSelect: (item: FormRow, context: ActionContext) => void;
  columns: SearchResultColumn[];
  initialFilterName?: string;
  autoSearchOnOpen?: boolean;
  viewMode?: "table" | "tree";
  treeConfig?: TreeConfig;
  pagination?: boolean;
  fields: FormField[];
  title: string;
}

export interface TableAction {
  onClick: (row: FormRow, context: ActionContext) => void;
  label: string;
  icon?: ReactNode;
}

export interface TableColumn {
  format?: (row: FormRow, contextData: FormValues) => ReactNode;
  header: string;
  key: string;
}

export interface FormModalConfig {
  onConfirm: (values: FormValues, context: ActionContext) => void;
  getInitialValues?: (context: ActionContext) => FormValues;
  onCancel?: (context: ActionContext) => void;
  gridColumns?: number;
  fields: FormField[];
  title: string;
}

export interface FormField {
  type?: FieldType;
  disabled?: Resolvable<boolean>;
  required?: Resolvable<boolean>;
  readOnly?: Resolvable<boolean>;
  options?: Resolvable<FieldOption[]>;
  conditionalRender?: (context: ActionContext) => boolean;
  renderRowDetail?: (row: FormRow, context: ActionContext) => ReactNode;
  onChange?: (value: unknown, context: ActionContext) => void;
  onButtonClick?: (context: ActionContext) => void;
  buttonVariant?: ButtonVariant;
  tableRowFilter?: (row: FormRow) => boolean;
  tableData?: FormRow[];
  tableColumns?: TableColumn[];
  tableActions?: TableAction[];
  formModalConfig?: FormModalConfig;
  searchConfig?: SearchConfig;
  validation?: FieldValidation;
  mask?: string | RegExp;
  modalTrigger?: string;
  disableFuture?: boolean;
  disablePast?: boolean;
  multiple?: boolean;
  freeSolo?: boolean;
  maxDate?: string;
  minDate?: string;
  colSpan?: number;
  tooltip?: string;
  newRow?: boolean;
  preSet?: string;
  label?: string;
  icon?: ReactNode;
  name: string;
}

export interface FormGroup {
  conditionalRender?: (context: ActionContext) => boolean;
  subGroups?: FormGroup[];
  collapsible?: boolean;
  gridColumns?: number;
  highlight?: boolean;
  seamless?: boolean;
  fields: FormField[];
  title?: string;
}

export interface FormAction {
  disabled?: Resolvable<boolean>;
  onClick?: (context: ActionContext) => Promise<boolean | void> | boolean | void;
  actionType: "next" | "prev" | "submit" | "custom";
  variant?: ButtonVariant;
  label: string;
}

export interface FormStep {
  readOnly?: Resolvable<boolean>;
  conditionalRender?: (context: ActionContext) => boolean;
  testData?: FormValues;
  actions: FormAction[];
  groups: FormGroup[];
  title: string;
  id: string;
}

export interface FormConfig {
  fieldPreSets?: Record<string, Partial<FormField>>;
  formStyle?: "simple" | "collapsed";
  steps: FormStep[];
}
