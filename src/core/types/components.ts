import type { ButtonVariant, FieldOption, FormField, InputFieldType, MessageFieldType, SearchResultColumn, TableAction, TableColumn, TreeConfig } from "@core/types/config";
import type { FormRow, FormValues } from "@core/types/values";
import type { ComponentType, ReactNode } from "react";

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

export type FormComponentsOverride = Partial<Omit<FormComponents, "inputs">> & {
  inputs?: Partial<FormComponents["inputs"]>;
};
