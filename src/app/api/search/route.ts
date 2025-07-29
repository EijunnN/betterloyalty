// app/api/search/route.ts
import { source } from "@/app/utils/source";
import { createSearchAPI } from "fumadocs-core/search/server";

export const { GET } = createSearchAPI("advanced", {
  indexes: source.getPages().map((page) => ({
    id: page.url,
    title: page.data.title,
    structuredData: page.data.structuredData,
    url: page.url,
  })),
});
