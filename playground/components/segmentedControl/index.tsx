import "./styles.css";

import type { SegmentedControlProps } from "./types";

const SegmentedControl = <Value extends string>({ label, options, value, onChange }: SegmentedControlProps<Value>) => (
  <div className="segmented" role="group" aria-label={label}>
    {options.map((option) => (
      <button key={option.value} type="button" aria-pressed={value === option.value} onClick={() => onChange(option.value)}>
        {option.label}
      </button>
    ))}
  </div>
);

export default SegmentedControl;
