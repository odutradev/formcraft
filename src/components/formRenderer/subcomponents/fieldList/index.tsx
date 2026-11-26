import useFormRuntime from "@/hooks/useFormRuntime";
import FieldRenderer from "../fieldRenderer";

import type { FieldListProps } from "./types";

const FieldList = ({ fields, columns, binding }: FieldListProps) => {
  const { components } = useFormRuntime();
  const { fieldGrid: FieldGrid, fieldSlot: FieldSlot } = components;
  const fileFieldNames = fields.filter((field) => field.type === "file").map((field) => field.name);

  return (
    <FieldGrid columns={columns}>
      {fields.map((field) => (
        <FieldSlot key={field.name} colSpan={field.colSpan} isNewRow={Boolean(field.newRow)}>
          <FieldRenderer field={field} binding={binding} orderNumber={fileFieldNames.indexOf(field.name) + 1} />
        </FieldSlot>
      ))}
    </FieldGrid>
  );
};

export default FieldList;
