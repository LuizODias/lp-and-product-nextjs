import { Meta } from "@storybook/react";
import { Table, tableType } from ".";

export default {
  title: "Table/Default",
  component: Table,
} as Meta;

export const Default = {
  args: {
    header: [
      {
        text: "E-mail",
      },
      {
        text: "Acesso",
      },
      {
        text: "Grupos",
      },
    ],
    rows: [
      ["test@test.com", "Administrador", "Nenhum grupo"],
      ["test@test.com", "Administrador", "Nenhum grupo"],
      ["test@test.com", "Administrador", "Nenhum grupo"],
      ["test@test.com", "Administrador", "Nenhum grupo"],
    ],
  } as tableType,
};
