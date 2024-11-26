"use client"
import "@/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { DefaultContextProvider } from "../shared/hooks/useMenuState";
import { SkeletonTheme } from "react-loading-skeleton";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { FigtreeProvider, GBProvider, ReactQueryProvider } from "@/shared/providers";
import moment from "moment";
import "moment/locale/pt-br";
import { CookiesConsent } from "@/shared/Components/Dialogs/Cookies";

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  moment().locale("pt");

  return (
    <html lang="en">
      <body>
        <DefaultContextProvider>
          <FigtreeProvider>
            <ReactQueryProvider>
              <UserProvider profileUrl="/bff/auth/me">
                <GBProvider>
                  <SkeletonTheme baseColor="#EFEFEF" highlightColor="#D5DBE4">
                    {children}
                    <CookiesConsent />
                  </SkeletonTheme>
                </GBProvider>
              </UserProvider>
            </ReactQueryProvider>
          </FigtreeProvider>
        </DefaultContextProvider>
      </body>
    </html>
  );
}