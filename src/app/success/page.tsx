import { Success } from "@/Modules";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Scores de Crédito',
}

export default function SuccessComponent() {
  return <Success />;
}