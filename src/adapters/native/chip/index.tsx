import Icon from "@adapters/native/icon";

import type { ChipProps } from "./types";

const Chip = ({ label, removeLabel, onRemove }: ChipProps) => (
  <span className="fc-chip">
    <span className="fc-chip-label">{label}</span>
    {onRemove && (
      <button type="button" className="fc-chip-remove" aria-label={`${removeLabel}: ${label}`} onClick={onRemove}>
        <Icon name="close" />
      </button>
    )}
  </span>
);

export default Chip;
