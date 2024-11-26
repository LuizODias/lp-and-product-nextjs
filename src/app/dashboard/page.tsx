import { Credentials } from "@/Modules";
import type { Metadata, NextPage } from 'next'
import { PublicEnvProvider } from 'next-runtime-env';
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export const metadata: Metadata = {
  title: 'Scores de Crédito - Dashboard',
}

const Dashboard: NextPage = withPageAuthRequired(
  async () => {
    return <PublicEnvProvider><Credentials /></PublicEnvProvider>;
  }, 
  { returnTo: "/" },
);

export default Dashboard;