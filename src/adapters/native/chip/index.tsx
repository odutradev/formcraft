import Icon from "@/adapters/native/icon";

import type { ChipProps } from "./types";

const Chip = ({ label, removeLabel, onRemove }: ChipProps) => (
  <span className="msf-chip">
    <span className="msf-chip-label">{label}</span>
    {onRemove && (
      <button type="button" className="msf-chip-remove" aria-label={`${removeLabel}: ${label}`} onClick={onRemove}>
        <Icon name="close" />
      </button>
    )}
  </span>
);

export default Chip;
