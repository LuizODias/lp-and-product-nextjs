import { Credential } from "@/Modules";
import type { Metadata } from 'next'
import { PublicEnvProvider } from "next-runtime-env";
 
export const metadata: Metadata = {
  title: 'Scores de Crédito - Credencial',
}

export default function DashboardCredential () {
  return <PublicEnvProvider><Credential /></PublicEnvProvider>;
}
