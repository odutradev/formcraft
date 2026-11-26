import type { FormRow } from "multi-step-form";

export const people: FormRow[] = [
  { id: "1", name: "Ana Souza", document: "111.222.333-44", city: "São Paulo" },
  { id: "2", name: "Bruno Lima", document: "555.666.777-88", city: "Rio de Janeiro" },
  { id: "3", name: "Carla Dias", document: "999.000.111-22", city: "Belo Horizonte" },
  { id: "4", name: "Diego Alves", document: "222.333.444-55", city: "Curitiba" },
  { id: "5", name: "Elisa Rocha", document: "666.777.888-99", city: "Recife" },
  { id: "6", name: "Fábio Nunes", document: "333.444.555-66", city: "Salvador" },
  { id: "7", name: "Gabriela Melo", document: "777.888.999-00", city: "Porto Alegre" }
];

export const departments: FormRow[] = [
  {
    code: "adm",
    name: "Administrativo",
    children: [
      { code: "fin", name: "Financeiro", children: [{ code: "cob", name: "Cobrança" }] },
      { code: "rh", name: "Recursos humanos" }
    ]
  },
  {
    code: "tec",
    name: "Tecnologia",
    children: [
      { code: "dev", name: "Desenvolvimento" },
      { code: "inf", name: "Infraestrutura" }
    ]
  }
];
