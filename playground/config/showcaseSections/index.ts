import searchPeople from "@playground/functions/searchPeople";
import { englishFormDefaults, sectionFormDefaults } from "@playground/data/formDefaults";
import { departments, people } from "@playground/data/people";

import type { ShowcaseSection } from "@playground/types";
import type { FormAction, FormRow } from "formcraft";

const validateAction: FormAction[] = [{ label: "Validar", actionType: "submit" }];

const cityOptions = [
  { label: "São Paulo", value: "sp" },
  { label: "Rio de Janeiro", value: "rj" },
  { label: "Belo Horizonte", value: "bh" },
  { label: "Curitiba", value: "cwb" },
  { label: "Recife", value: "rec" }
];

const toRows = (value: unknown): FormRow[] => (Array.isArray(value) ? value : []);

const showcaseSections: ShowcaseSection[] = [
  {
    id: "text",
    title: "Texto e números",
    description: "Campos de texto com máscara, validação por regex, moeda, porcentagem, tooltip e estados desabilitado e somente leitura.",
    features: ["text", "email", "number", "currency", "percentage", "mask", "validation", "tooltip", "disabled", "readOnly"],
    config: {
      steps: [
        {
          id: "text",
          title: "Texto e números",
          actions: validateAction,
          groups: [
            {
              gridColumns: 2,
              fields: [
                { name: "fullName", label: "Nome completo", required: true, colSpan: 2 },
                {
                  name: "email",
                  label: "E-mail",
                  type: "email",
                  required: true,
                  validation: { pattern: "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$", message: "E-mail inválido" }
                },
                { name: "document", label: "CPF", mask: "000.000.000-00", tooltip: "Máscara 000.000.000-00" },
                { name: "age", label: "Idade", type: "number" },
                { name: "salary", label: "Salário", type: "currency", tooltip: "Formatado como moeda brasileira" },
                { name: "discount", label: "Desconto", type: "percentage" },
                { name: "code", label: "Código interno", disabled: true },
                { name: "protocol", label: "Protocolo", readOnly: true }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: "selection",
    title: "Seleção",
    description: "Listas simples e múltiplas, autocomplete com e sem texto livre e campo de tags.",
    features: ["select", "multiple", "autocomplete", "freeSolo", "tags"],
    config: {
      steps: [
        {
          id: "selection",
          title: "Seleção",
          actions: validateAction,
          groups: [
            {
              gridColumns: 2,
              fields: [
                {
                  name: "plan",
                  label: "Plano",
                  type: "select",
                  required: true,
                  options: [
                    { label: "Básico", value: "basic" },
                    { label: "Profissional", value: "pro" },
                    { label: "Empresarial", value: "enterprise" }
                  ]
                },
                { name: "city", label: "Cidade", type: "autocomplete", options: cityOptions },
                { name: "branches", label: "Filiais", type: "autocomplete", multiple: true, options: cityOptions },
                { name: "origin", label: "Como nos conheceu", type: "autocomplete", freeSolo: true, options: cityOptions.slice(0, 2) },
                { name: "regions", label: "Regiões atendidas", type: "select", multiple: true, options: cityOptions },
                { name: "skills", label: "Competências", type: "tags" }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: "dates",
    title: "Datas",
    description: "Datas livres, só no passado, só no futuro ou dentro de um intervalo fixo.",
    features: ["date", "disableFuture", "disablePast", "minDate", "maxDate"],
    config: {
      steps: [
        {
          id: "dates",
          title: "Datas",
          actions: validateAction,
          groups: [
            {
              gridColumns: 2,
              fields: [
                { name: "birthDate", label: "Nascimento", type: "date", disableFuture: true, required: true },
                { name: "startDate", label: "Início do contrato", type: "date", disablePast: true },
                { name: "eventDate", label: "Data do evento", type: "date", minDate: "2026-01-01", maxDate: "2026-12-31", tooltip: "Somente em 2026" },
                { name: "freeDate", label: "Data livre", type: "date" }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: "files",
    title: "Arquivos",
    description: "Anexos em PDF numerados, com descrição opcional, edição e remoção, dentro de um grupo simples destacado.",
    features: ["file", "required", "description", "highlight"],
    config: {
      steps: [
        {
          id: "files",
          title: "Arquivos",
          actions: validateAction,
          groups: [
            {
              title: "Documentos",
              highlight: true,
              fields: [
                { name: "identity", label: "Documento de identidade", type: "file", required: true },
                { name: "address", label: "Comprovante de endereço", type: "file" }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: "messages",
    title: "Mensagens e divisores",
    description: "Textos informativos, alertas de aviso e erro e divisores com ou sem rótulo.",
    features: ["info", "warning", "error", "divider"],
    config: {
      steps: [
        {
          id: "messages",
          title: "Mensagens",
          actions: validateAction,
          groups: [
            {
              gridColumns: 1,
              fields: [
                { name: "infoText", label: "Texto informativo para orientar quem preenche o formulário.", type: "info" },
                { name: "warningText", label: "Confira os dados antes de enviar: eles não poderão ser alterados.", type: "warning" },
                { name: "errorText", label: "Não foi possível validar o cadastro na Receita Federal.", type: "error" },
                { name: "labeledDivider", label: "Dados complementares", type: "divider" },
                { name: "notes", label: "Observações" },
                { name: "plainDivider", type: "divider" }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: "buttons",
    title: "Botões e modal",
    description: "Botões nas três variantes e um botão que abre um formulário em modal e grava o resultado em uma tabela.",
    features: ["button", "buttonVariant", "formModalConfig", "table"],
    config: {
      steps: [
        {
          id: "buttons",
          title: "Botões",
          actions: validateAction,
          groups: [
            {
              gridColumns: 3,
              fields: [
                { name: "textButton", label: "Texto", type: "button", buttonVariant: "text", onButtonClick: () => undefined },
                { name: "outlinedButton", label: "Contorno", type: "button", buttonVariant: "outlined", onButtonClick: () => undefined },
                {
                  name: "addContact",
                  label: "Adicionar contato",
                  type: "button",
                  formModalConfig: {
                    title: "Novo contato",
                    gridColumns: 2,
                    fields: [
                      { name: "contactName", label: "Nome", required: true },
                      { name: "contactPhone", label: "Telefone", mask: "(00) 00000-0000" },
                      {
                        name: "contactType",
                        label: "Tipo de contato",
                        type: "select",
                        colSpan: 2,
                        options: [
                          { label: "Pessoal", value: "personal" },
                          { label: "Trabalho", value: "work" }
                        ]
                      }
                    ],
                    onConfirm: (values, context) => {
                      const list = toRows(context.getValues("contacts"));
                      context.setValue("contacts", [...list, { id: String(list.length + 1), name: values.contactName, phone: values.contactPhone }]);
                    }
                  }
                },
                {
                  name: "contacts",
                  label: "Contatos",
                  type: "table",
                  colSpan: 3,
                  newRow: true,
                  tableColumns: [
                    { header: "Nome", key: "name" },
                    { header: "Telefone", key: "phone" }
                  ],
                  tableActions: [
                    {
                      label: "Remover",
                      onClick: (row, context) =>
                        context.setValue(
                          "contacts",
                          toRows(context.getValues("contacts")).filter((item) => item.id !== row.id)
                        )
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: "table",
    title: "Tabela",
    description: "Tabela com dados fixos, coluna formatada, linha expansível e ações por linha.",
    features: ["table", "tableData", "format", "renderRowDetail", "tableActions"],
    config: {
      steps: [
        {
          id: "table",
          title: "Tabela",
          actions: validateAction,
          groups: [
            {
              fields: [
                {
                  name: "team",
                  label: "Equipe",
                  type: "table",
                  tableData: people.slice(0, 4),
                  tableColumns: [
                    { header: "Nome", key: "name" },
                    { header: "CPF", key: "document" },
                    { header: "Cidade", key: "city", format: (row) => String(row.city).toUpperCase() }
                  ],
                  renderRowDetail: (row) => `${String(row.name)} mora em ${String(row.city)}.`,
                  tableActions: [
                    {
                      label: "Remover",
                      onClick: (row, context) =>
                        context.setValue(
                          "team",
                          people.slice(0, 4).filter((item) => item.id !== row.id)
                        )
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: "search",
    title: "Busca",
    description: "Campos com busca em modal: resultados em tabela paginada ou em árvore. Clique na lupa ou pressione Enter.",
    features: ["searchConfig", "pagination", "viewMode: tree", "autoSearchOnOpen"],
    config: {
      steps: [
        {
          id: "search",
          title: "Busca",
          actions: validateAction,
          groups: [
            {
              gridColumns: 2,
              fields: [
                {
                  name: "person",
                  label: "Pessoa",
                  searchConfig: {
                    title: "Buscar pessoa",
                    initialFilterName: "name",
                    pagination: true,
                    autoSearchOnOpen: true,
                    columns: [
                      { header: "Nome", key: "name" },
                      { header: "CPF", key: "document" },
                      { header: "Cidade", key: "city" }
                    ],
                    fields: [{ name: "name", label: "Nome" }],
                    onSearch: searchPeople,
                    onSelect: (item, context) => context.setMultipleValues({ person: item.name, personDocument: item.document })
                  }
                },
                { name: "personDocument", label: "CPF da pessoa", readOnly: true },
                {
                  name: "department",
                  label: "Departamento",
                  searchConfig: {
                    title: "Escolher departamento",
                    viewMode: "tree",
                    autoSearchOnOpen: true,
                    treeConfig: { childrenKey: "children", labelKey: "name", valueKey: "code" },
                    columns: [{ header: "Nome", key: "name" }],
                    fields: [{ name: "name", label: "Nome" }],
                    onSearch: async () => departments,
                    onSelect: (item, context) => context.setValue("department", item.name)
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: "groups",
    title: "Grupos",
    description: 'Estilo recolhível: cards, subgrupo condicional, subgrupo sem borda e card fixo. Escolha "Sim" para ver o subgrupo.',
    features: ["formStyle: collapsed", "collapsible", "subGroups", "seamless", "conditionalRender"],
    config: {
      formStyle: "collapsed",
      steps: [
        {
          id: "groups",
          title: "Grupos",
          actions: validateAction,
          groups: [
            {
              title: "Endereço",
              gridColumns: 3,
              fields: [
                { name: "zipCode", label: "CEP", mask: "00000-000" },
                { name: "street", label: "Rua", colSpan: 2 },
                {
                  name: "hasComplement",
                  label: "Tem complemento?",
                  type: "select",
                  options: [
                    { label: "Sim", value: "yes" },
                    { label: "Não", value: "no" }
                  ]
                }
              ],
              subGroups: [
                {
                  title: "Complemento",
                  conditionalRender: (context) => context.data.hasComplement === "yes",
                  gridColumns: 2,
                  fields: [
                    { name: "complement", label: "Complemento" },
                    { name: "reference", label: "Ponto de referência" }
                  ]
                },
                {
                  seamless: true,
                  fields: [{ name: "addressHint", label: "Subgrupo sem borda (seamless) logo abaixo do anterior.", type: "info" }]
                }
              ]
            },
            {
              title: "Grupo fixo",
              collapsible: false,
              fields: [{ name: "fixedNote", label: "Este card não pode ser recolhido (collapsible: false)." }]
            }
          ]
        }
      ]
    }
  },
  {
    id: "provider",
    title: "Provider",
    description:
      "Os presets phone e zipCode vêm do FormcraftProvider global do app. Um Provider aninhado nesta seção define formStyle collapsed e o texto de obrigatório. A config local troca o preset zipCode e um campo troca o rótulo do preset.",
    features: ["FormcraftProvider", "fieldPreSets global", "Provider aninhado", "labels", "formStyle"],
    defaults: sectionFormDefaults,
    config: {
      fieldPreSets: { zipCode: { label: "CEP de entrega", mask: "00000-000" } },
      steps: [
        {
          id: "provider",
          title: "Provider",
          actions: validateAction,
          groups: [
            {
              title: "Contato",
              gridColumns: 2,
              fields: [
                { name: "phone", preSet: "phone", required: true },
                { name: "workPhone", preSet: "phone", label: "Telefone comercial" },
                { name: "zipCode", preSet: "zipCode", required: true }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: "locale",
    title: "Idiomas",
    description:
      "Os textos da biblioteca vêm em português e inglês. Por padrão o idioma segue o navegador (locale auto); esta seção fixa locale en num Provider aninhado, sem depender do seletor do painel. Valide vazio para ver as mensagens.",
    features: ["locale", "auto", "pt-BR", "en", "enLabels"],
    defaults: englishFormDefaults,
    config: {
      steps: [
        {
          id: "locale",
          title: "Idiomas",
          actions: validateAction,
          groups: [
            {
              title: "Textos em inglês",
              gridColumns: 2,
              fields: [
                { name: "localeName", label: "Nome", required: true },
                { name: "localeCity", label: "Cidade", type: "select", options: cityOptions, required: true },
                { name: "localeTags", label: "Tags", type: "tags" },
                { name: "localeDate", label: "Data", type: "date" },
                { name: "localeDocument", label: "Documento", type: "file", required: true, colSpan: 2 }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: "steps",
    title: "Etapas e ações",
    description: "Indicador de etapas, etapa condicional, ação personalizada assíncrona com carregamento e botões voltar e enviar.",
    features: ["steps", "conditionalRender", "actionType: custom", "onClick async", "readOnly"],
    config: {
      steps: [
        {
          id: "account",
          title: "Conta",
          actions: [
            {
              label: "Verificar",
              actionType: "custom",
              variant: "outlined",
              onClick: async (context) => {
                await new Promise((resolve) => setTimeout(resolve, 1200));
                context.setValue("verified", "Verificado com sucesso");
              }
            },
            { label: "Próximo", actionType: "next" }
          ],
          groups: [
            {
              gridColumns: 2,
              fields: [
                { name: "username", label: "Usuário", required: true },
                {
                  name: "accountType",
                  label: "Tipo de conta",
                  type: "select",
                  options: [
                    { label: "Pessoal", value: "personal" },
                    { label: "Empresa", value: "company" }
                  ]
                },
                { name: "verified", label: "Verificação", readOnly: true, colSpan: 2 }
              ]
            }
          ]
        },
        {
          id: "company",
          title: "Empresa",
          conditionalRender: (context) => context.data.accountType === "company",
          actions: [
            { label: "Voltar", actionType: "prev", variant: "outlined" },
            { label: "Próximo", actionType: "next" }
          ],
          groups: [{ fields: [{ name: "cnpj", label: "CNPJ", mask: "00.000.000/0000-00", required: true }] }]
        },
        {
          id: "review",
          title: "Revisão",
          readOnly: true,
          actions: [
            { label: "Voltar", actionType: "prev", variant: "outlined" },
            { label: "Enviar", actionType: "submit" }
          ],
          groups: [
            {
              gridColumns: 2,
              fields: [
                { name: "reviewNotice", label: "Etapa somente leitura: confira e envie.", type: "info", colSpan: 2 },
                { name: "username", label: "Usuário" },
                { name: "verified", label: "Verificação" }
              ]
            }
          ]
        }
      ]
    }
  }
];

export default showcaseSections;
