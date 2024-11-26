import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface signoutParams {
  push: AppRouterInstance
}

export const signout = async ({ push }: signoutParams) => {
  push.push('/bff/auth/logout');
}
