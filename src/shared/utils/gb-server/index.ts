import { setPolyfills } from "@growthbook/growthbook";
import { GetServerSidePropsContext } from "next";
import { env } from "next-runtime-env";

export function getServerSideGrowthBookContext(context?: GetServerSidePropsContext) {
  setPolyfills({
    fetch: globalThis.fetch,
    EventSource: globalThis.EventSource,
    SubtleCrypto: globalThis.crypto?.subtle
  });

  return {
    apiHost: env("NEXT_PUBLIC_GROWTHBOOK_API_HOST"),
    clientKey: env("NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY"),
  }
}
