import { FieldsContainer } from "./styles";

import type { FieldGridProps } from "./types";

const FieldGrid = ({ columns, children }: FieldGridProps) => <FieldsContainer $columns={columns}>{children}</FieldsContainer>;

export default FieldGrid;
