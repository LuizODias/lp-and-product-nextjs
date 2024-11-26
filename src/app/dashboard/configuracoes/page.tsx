"use client";
import { Configs, Report } from "@/Modules";
import { Flags } from "@/shared";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

export default function DashboardConfig() {
  const router = useRouter();
  const { user } = useUser();
  let flags;

  if(user) {
    flags = user.flags as Flags
  }

  if (flags && !flags.config_tab?.defaultValue) router.push("/404");
  
  else return <Configs />;
}
