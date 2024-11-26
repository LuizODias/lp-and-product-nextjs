import { FeatureDefinition, GrowthBook } from "@growthbook/growthbook-react";
import type { NextApiRequest, NextApiResponse } from "next";
import next from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Record<string, FeatureDefinition<any>>>
) {
  const gb = new GrowthBook({
    apiHost: "https://cdn.growthbook.io",
    clientKey: process.env["NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY"],
  });

  await gb.init({});

  const allflags = gb.getFeatures();

  res.status(200).json(allflags);
}
