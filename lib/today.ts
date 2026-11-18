import { cacheLife } from "next/cache";
import { toISODateString } from "./format";

export async function getToday(): Promise<string> {
  "use cache";
  cacheLife("hours");
  return toISODateString(new Date());
}
