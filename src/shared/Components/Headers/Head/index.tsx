import Head from "next/head";
import { PublicEnvScript } from 'next-runtime-env';

export const HeadCustom = () => { 
  return (
    <Head>
      <PublicEnvScript />
      <title> API </title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="API" />
      <meta
        property="og:description"
        content="Análise de risco fácil e segura em uma só API"
      />
      <meta property="og:image" content="" />
      <link rel="icon" type="image/x-icon" href="" />
    </Head>
  );
};
