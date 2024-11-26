import { OptionsType } from "@/shared";
import { headerTypes } from "@/shared/Components/Table/Default";

export const Models: OptionsType[] = [
  { label: 'Modelo de Renda Estimada', value: 'rendaEstimada' },
  { label: 'Score de Estabilidade Empregatícia', value: 'probabilidadeDemissao' },
  { label: 'Análise de Crédito Pessoa Jurídica', value: 'probabilidadeDemissao' },
  { label: 'Análise de Crédito Pessoa Física', value: 'probabilidadeDemissao' },
]

export const headerTestsTable: headerTypes[] = [
  {
    text: "Nome da solicitação",
  },
  {
    text: "Data da solicitação",
  },
  {
    text: "Status",
  },
  {
    text: "Ações",
  },
];