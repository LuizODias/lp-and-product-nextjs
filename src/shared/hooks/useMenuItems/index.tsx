import { VIEWS } from "@/constants/view";
import { ChartBarIcon } from "@/shared/Components/Icons/ChartBarIcon";
import { KeyIcon } from "@/shared/Components/Icons/KeyIcon";
import { MenuItem } from "@/shared/Components/Navegation";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { useFeatureValue } from "@growthbook/growthbook-react";
import {
  DocumentChartBarIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Flags } from "@/shared/types";

export const useMenuItens = () => {
  const route = usePathname();

  const { user } = useUser();
  let flags;
  
  if(user) {
    flags = user.flags as Flags
  }
  
  const report_tab = flags?.report_tab;
  const mytests_tab = flags?.mytests_tab;
  const products_tab = flags?.products_tab;

  const menuItems: MenuItem[] = useMemo(() => {
    const arrayRoutes = [
      {
        id: "2",
        text: "Credenciais de acesso",
        url: VIEWS.credenciaisAcesso(),
        icon: <KeyIcon />,
      },
    ];

    if (products_tab) {
      arrayRoutes.push({
        id: "1",
        text: "Produtos",
        url: VIEWS.produtos(),
        icon: <RectangleStackIcon width={18} height={18} />,
      });
    }
    if (report_tab) {
      arrayRoutes.push({
        id: "3",
        text: "Relatório de consumo",
        url: VIEWS.relatorioConsumo(),
        icon: <DocumentChartBarIcon width={18} height={18} />,
      });
    }
    if (mytests_tab) {
      arrayRoutes.push({
        id: "4",
        text: "Meus testes",
        url: VIEWS.testes(),
        icon: <ChartBarIcon />,
      });
    }

    return arrayRoutes.sort((a: MenuItem, b: MenuItem) => {
      return a.id.localeCompare(b.id);
    });
  }, [report_tab, mytests_tab, products_tab]);

  const actualRoute = useMemo(
    () =>
      menuItems.find(
        (item) => item.url === route || item.url + "/credencial" === route
      ),
    [menuItems, route]
  );

  return {
    menuItems,
    actualRoute,
  };
};
