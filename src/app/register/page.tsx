import { Register } from "@/Modules";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scores de Crédito',
}

export default function RegisterComponent() {
  return <Register />;
}
