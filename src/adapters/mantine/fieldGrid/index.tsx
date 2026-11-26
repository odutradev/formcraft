import { Box } from "@mantine/core";

import type { FieldGridProps } from "./types";
import type { CssVariables } from "@typings";

const smallScreenColumns = 2;

const FieldGrid = ({ columns, children }: FieldGridProps) => {
  const style: CssVariables | undefined = columns ? { "--msf-columns": columns, "--msf-columns-sm": Math.min(smallScreenColumns, columns) } : undefined;

  return (
    <Box className="msf-mantine-grid" data-auto={columns ? undefined : true} style={style}>
      {children}
    </Box>
  );
};

export default FieldGrid;
