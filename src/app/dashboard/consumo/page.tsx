"use client";
import { Report } from "@/Modules";
import { Flags } from "@/shared";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

export default function DashboardConsumo() {
  const router = useRouter();
  const { user } = useUser();
  let flags;

  if(user) {
    flags = user.flags as Flags
  }

  if (flags && !flags.report_tab?.defaultValue) router.push("/404");
  
  else return <Report />;
}
