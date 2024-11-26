"use client";
import { BacktestHistory } from "@/Modules/Backtest";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

interface Flags {
  mytests_tab?: Flag
}

interface Flag {
  defaultValue: boolean
}

export default function DashboardTests() {
  const router = useRouter();
  const { user } = useUser();
  let flags;

  if(user) {
    flags = user.flags as Flags
  }

  if (flags && !flags.mytests_tab?.defaultValue) router.push("/404");

  else return <BacktestHistory />;
}
