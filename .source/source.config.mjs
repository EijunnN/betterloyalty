// source.config.ts
import { defineDocs } from "fumadocs-mdx/config";
var docs = defineDocs({
  // Apunta a la carpeta donde vivirán tus archivos .mdx
  dir: "content/docs"
});
export {
  docs
};
