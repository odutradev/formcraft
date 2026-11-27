import type { FieldGridProps } from "./types";
import type { CssVariables } from "@typings";

const smallScreenColumns = 2;

const FieldGrid = ({ columns, children }: FieldGridProps) => {
  const style: CssVariables | undefined = columns ? { "--fc-columns": columns, "--fc-columns-sm": Math.min(smallScreenColumns, columns) } : undefined;

  return (
    <div className="fc-antd-grid" data-auto={columns ? undefined : true} style={style}>
      {children}
    </div>
  );
};

export default FieldGrid;
