"use client";
import { Products } from "@/Modules";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

interface Flags {
  report_tab?: Flag
}

interface Flag {
  defaultValue: boolean
}

export default function DashboardProducts() {
  const router = useRouter();
  const { user } = useUser();
  let flags;

  if(user) {
    flags = user.flags as Flags
  }

  if (flags && !flags.report_tab?.defaultValue) router.push("/404");

  else return <Products />;
}
