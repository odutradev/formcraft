import type { ComponentType, ReactNode } from "react";

export type FormValues = Record<string, unknown>;

export type FormErrors = Record<string, string>;

export type FormRow = Record<string, unknown>;

export interface FieldErrorInput {
  message?: string;
  type?: string;
}

export interface ValuesGetter {
  (): FormValues;
  (name: string): unknown;
}

export interface ActionContext {
  data: FormValues;
  getValues: ValuesGetter;
  getParentValues?: ValuesGetter;
  setValue: (name: string, value: unknown) => void;
  setMultipleValues: (values: FormValues, shouldClearErrors?: boolean) => void;
  setError: (name: string, error: FieldErrorInput) => void;
  clearErrors: (names?: string | string[]) => void;
}

export type Resolvable<T> = T | ((context: ActionContext) => T);

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

export interface DisplayedRowsRange {
  from: number;
  to: number;
  count: number;
}

export interface FormLabels {
  required: string;
  processing: string;
  noOptions: string;
  searchHint: string;
  tagsHint: string;
  search: string;
  openSearch: string;
  searching: string;
  noResults: string;
  select: string;
  actions: string;
  moreActions: string;
  close: string;
  cancel: string;
  save: string;
  expand: string;
  collapse: string;
  rowsPerPage: string;
  previousPage: string;
  nextPage: string;
  remove: string;
  displayedRows: (range: DisplayedRowsRange) => string;
  fileRequired: string;
  fileAttach: string;
  fileRemove: string;
  fileDescription: string;
  fileEditDescription: string;
}

export interface ContainerProps {
  children: ReactNode;
}

export interface FormLayoutProps extends ContainerProps {
  header?: ReactNode;
  isLoading: boolean;
  hasStepIndicator: boolean;
}

export interface StepIndicatorItem {
  id: string;
  title: string;
}

export interface StepIndicatorProps {
  steps: StepIndicatorItem[];
  currentStepIndex: number;
}

export interface GroupProps extends ContainerProps {
  title?: string;
  variant: "plain" | "card" | "subGroup";
  isHighlighted: boolean;
  isSeamless: boolean;
  isCollapsible: boolean;
  isCollapsed: boolean;
  onToggle: () => void;
}

export interface FieldGridProps extends ContainerProps {
  columns?: number;
}

export interface FieldSlotProps extends ContainerProps {
  colSpan?: number;
  isNewRow: boolean;
}

export interface InputFieldProps {
  field: FormField;
  value: unknown;
  error?: string;
  options: FieldOption[];
  orderNumber: number;
  isRequired: boolean;
  isDisabled: boolean;
  isReadOnly: boolean;
  onChange: (value: unknown) => void;
  onEnter?: () => void;
  onOpenSearch?: () => void;
}

export interface MessageFieldProps {
  field: FormField;
  severity: MessageFieldType;
}

export interface DividerFieldProps {
  field: FormField;
}

export interface ButtonProps {
  label: string;
  icon?: ReactNode;
  variant: ButtonVariant;
  color?: "primary" | "inherit";
  placement: "field" | "action" | "dialog";
  isDisabled: boolean;
  onClick: () => void;
}

export interface TableFieldProps {
  label?: string;
  rows: FormRow[];
  columns: TableColumn[];
  actions: TableAction[];
  isReadOnly: boolean;
  getRowKey: (row: FormRow, index: number) => string;
  renderCell: (column: TableColumn, row: FormRow) => ReactNode;
  renderRowDetail?: (row: FormRow) => ReactNode;
  onAction: (action: TableAction, row: FormRow) => void;
}

export interface ModalProps extends ContainerProps {
  title: string;
  size: "md" | "lg";
  actions: ReactNode;
  onClose: () => void;
}

export interface SearchBarProps extends ContainerProps {
  isLoading: boolean;
  onSearch: () => void;
}

export interface SearchResultsProps {
  results: FormRow[];
  columns: SearchResultColumn[];
  viewMode: "table" | "tree";
  treeConfig?: TreeConfig;
  isLoading: boolean;
  isPaginated: boolean;
  isExpandedByDefault: boolean;
  onSelect: (row: FormRow) => void;
}

export interface DevToolsStep {
  id: string;
  title: string;
  hasTestData: boolean;
}

export interface DevToolsPanelProps {
  steps: DevToolsStep[];
  values: FormValues;
  schema: FormValues;
  onFillStep: (stepId: string) => void;
  onFillAll: () => void;
  onClearStep: (stepId: string) => void;
  onClearAll: () => void;
}

export interface FormComponents {
  form: ComponentType<FormLayoutProps>;
  stepIndicator: ComponentType<StepIndicatorProps>;
  groupList: ComponentType<ContainerProps>;
  group: ComponentType<GroupProps>;
  subGroupList: ComponentType<ContainerProps>;
  fieldGrid: ComponentType<FieldGridProps>;
  fieldSlot: ComponentType<FieldSlotProps>;
  inputs: Record<InputFieldType, ComponentType<InputFieldProps>>;
  message: ComponentType<MessageFieldProps>;
  divider: ComponentType<DividerFieldProps>;
  button: ComponentType<ButtonProps>;
  actions: ComponentType<ContainerProps>;
  table: ComponentType<TableFieldProps>;
  modal: ComponentType<ModalProps>;
  searchBar: ComponentType<SearchBarProps>;
  searchResults: ComponentType<SearchResultsProps>;
  devTools: ComponentType<DevToolsPanelProps>;
}

export interface FormRuntime {
  components: FormComponents;
  labels: FormLabels;
  reportError: (error: unknown) => void;
}

export interface MultiStepFormProps {
  config: FormConfig;
  components?: FormComponents;
  onSubmit: (data: FormValues) => void | Promise<void>;
  onError?: (error: unknown) => void;
  initialData?: FormValues;
  labels?: Partial<FormLabels>;
  isDevToolsEnabled?: boolean;
}
