// app/docs/[[...slug]]/page.tsx
import { source } from "@/app/utils/source";
import { DocsPage, DocsBody } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { getMDXComponents } from "../../../../mdx-components";
import type { Metadata } from "next";

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const page = source.getPage(slug);

  if (!page) {
    notFound();
  }

  const MDX = page.data.body;
  const components = getMDXComponents();

  return (
    <DocsPage toc={page.data.toc}>
      <DocsBody>
        <h1>{page.data.title}</h1>
        <MDX components={components} />
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: page.slugs,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = source.getPage(slug);

  if (page == null) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
