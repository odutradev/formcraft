import type { FieldGridProps } from "./types";
import type { CssVariables } from "@typings";

const smallScreenColumns = 2;

const FieldGrid = ({ columns, children }: FieldGridProps) => {
  const style: CssVariables | undefined = columns ? { "--msf-columns": columns, "--msf-columns-sm": Math.min(smallScreenColumns, columns) } : undefined;

  return (
    <div className="msf-antd-grid" data-auto={columns ? undefined : true} style={style}>
      {children}
    </div>
  );
};

export default FieldGrid;
