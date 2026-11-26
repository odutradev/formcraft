import type { FieldOption } from "@typings";

export interface ComboBoxProps {
  id: string;
  describedBy?: string;
  options: FieldOption[];
  selectedValues: string[];
  inputValue: string;
  filterText: string;
  isMultiple: boolean;
  isSearchable: boolean;
  isRequired: boolean;
  isDisabled: boolean;
  isReadOnly: boolean;
  isInvalid: boolean;
  onInputChange: (text: string) => void;
  onSelect: (option: FieldOption) => void;
  onRemove: (value: string) => void;
  onClear?: () => void;
  onCommitText?: (text: string) => void;
  onClose?: () => void;
}
