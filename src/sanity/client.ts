import { createClient } from "next-sanity";
import { PROJECTID } from "../hooks/useEnv";

export const client = createClient({
  projectId: PROJECTID,
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
