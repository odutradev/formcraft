import searchPeople from "@playground/functions/searchPeople";

import type { FormConfig, FormRow } from "multi-step-form";

const sampleConfig: FormConfig = {
  formStyle: "collapsed",
  fieldPreSets: {
    document: { type: "text", mask: "000.000.000-00", label: "CPF", required: true }
  },
  steps: [
    {
      id: "personal",
      title: "Dados pessoais",
      testData: { name: "Ana Souza", document: "111.222.333-44", personType: "individual", income: "R$ 1.500,00" },
      actions: [{ label: "Próximo", actionType: "next" }],
      groups: [
        {
          title: "Identificação",
          gridColumns: 2,
          fields: [
            {
              name: "name",
              label: "Nome",
              required: true,
              searchConfig: {
                title: "Buscar pessoa",
                initialFilterName: "name",
                pagination: true,
                columns: [
                  { header: "Nome", key: "name" },
                  { header: "CPF", key: "document" }
                ],
                fields: [{ name: "name", label: "Nome" }],
                onSearch: searchPeople,
                onSelect: (item, context) => context.setMultipleValues({ name: item.name, document: item.document })
              }
            },
            { name: "document", preSet: "document" },
            {
              name: "personType",
              label: "Tipo de pessoa",
              type: "select",
              required: true,
              options: [
                { label: "Pessoa física", value: "individual" },
                { label: "Pessoa jurídica", value: "company" }
              ]
            },
            { name: "income", label: "Renda", type: "currency", tooltip: "Renda mensal bruta" }
          ],
          subGroups: [
            {
              title: "Empresa",
              conditionalRender: (context) => context.data.personType === "company",
              fields: [{ name: "company.cnpj", label: "CNPJ", mask: "00.000.000/0000-00", required: true }]
            }
          ]
        }
      ]
    },
    {
      id: "details",
      title: "Detalhes",
      actions: [
        { label: "Voltar", actionType: "prev", variant: "outlined" },
        { label: "Enviar", actionType: "submit" }
      ],
      groups: [
        {
          title: "Preferências",
          fields: [
            { name: "birthDate", label: "Nascimento", type: "date", disableFuture: true },
            { name: "tags", label: "Tags", type: "tags" },
            {
              name: "city",
              label: "Cidade",
              type: "autocomplete",
              options: [
                { label: "São Paulo", value: "sp" },
                { label: "Rio de Janeiro", value: "rj" }
              ]
            },
            { name: "discount", label: "Desconto", type: "percentage" },
            { name: "contract", label: "Contrato assinado", type: "file", required: true },
            { name: "notice", label: "Confira os dados antes de enviar.", type: "warning" }
          ]
        },
        {
          title: "Dependentes",
          fields: [
            {
              name: "addDependent",
              label: "Adicionar dependente",
              type: "button",
              formModalConfig: {
                title: "Novo dependente",
                fields: [
                  { name: "dependentName", label: "Nome", required: true },
                  { name: "dependentDocument", preSet: "document" }
                ],
                onConfirm: (values, context) => {
                  const current = context.getValues("dependents");
                  const list = Array.isArray(current) ? current : [];
                  context.setValue("dependents", [...list, { id: String(list.length + 1), name: values.dependentName, document: values.dependentDocument }]);
                }
              }
            },
            {
              name: "dependents",
              label: "Dependentes",
              type: "table",
              tableColumns: [
                { header: "Nome", key: "name" },
                { header: "CPF", key: "document" }
              ],
              tableActions: [
                {
                  label: "Remover",
                  onClick: (row, context) => {
                    const current = context.getValues("dependents");
                    context.setValue("dependents", Array.isArray(current) ? current.filter((item: FormRow) => item.id !== row.id) : []);
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default sampleConfig;
