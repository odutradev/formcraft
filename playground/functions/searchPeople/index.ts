import { people } from "@playground/data/people";

import type { FormRow, FormValues } from "multi-step-form";

const searchPeople = async (filters: FormValues): Promise<FormRow[]> => {
  const term = String(filters.name ?? "").toLowerCase();
  await new Promise((resolve) => setTimeout(resolve, 400));
  return people.filter((person) => String(person.name).toLowerCase().includes(term));
};

export default searchPeople;
