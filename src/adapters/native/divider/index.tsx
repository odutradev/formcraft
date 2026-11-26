import type { DividerProps } from "./types";

const Divider = ({ field }: DividerProps) => (
  <div className="msf-divider" role="separator">
    {field.label && <span>{field.label}</span>}
  </div>
);

export default Divider;
