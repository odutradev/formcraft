import type { FieldGridProps } from "./types";
import type { CssVariables } from "@typings";

const smallScreenColumns = 2;

const FieldGrid = ({ columns, children }: FieldGridProps) => {
  if (!columns) return <div className="fc-grid">{children}</div>;

  const style: CssVariables = { "--fc-columns": columns, "--fc-columns-sm": Math.min(smallScreenColumns, columns) };

  return (
    <div className="fc-grid fc-grid--fixed" style={style}>
      {children}
    </div>
  );
};

export default FieldGrid;
