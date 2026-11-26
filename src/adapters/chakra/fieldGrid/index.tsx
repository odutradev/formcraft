import { Grid } from "@chakra-ui/react";

import type { FieldGridProps } from "./types";

const smallScreenColumns = 2;

const autoColumns = "repeat(auto-fit, minmax(min(100%, 15.625rem), 1fr))";

const toColumns = (count: number) => `repeat(${count}, minmax(0, 1fr))`;

const FieldGrid = ({ columns, children }: FieldGridProps) => (
  <Grid
    width="full"
    gap="4"
    templateColumns={columns ? { base: toColumns(1), sm: toColumns(Math.min(smallScreenColumns, columns)), md: toColumns(columns) } : autoColumns}
  >
    {children}
  </Grid>
);

export default FieldGrid;
