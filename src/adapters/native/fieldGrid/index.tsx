import type { CssVariables } from "@adapters/native/types";
import type { FieldGridProps } from "./types";

const smallScreenColumns = 2;

const FieldGrid = ({ columns, children }: FieldGridProps) => {
  if (!columns) return <div className="msf-grid">{children}</div>;

  const style: CssVariables = { "--msf-columns": columns, "--msf-columns-sm": Math.min(smallScreenColumns, columns) };

  return (
    <div className="msf-grid msf-grid--fixed" style={style}>
      {children}
    </div>
  );
};

export default FieldGrid;
