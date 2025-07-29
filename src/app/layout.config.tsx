// app/layout.config.tsx
import { type BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
  githubUrl: "https://github.com/EijunnN/better-loyalty",
  nav: {
    title: "better-loyalty",
  },
  links: [
    {
      text: "Documentación",
      url: "/docs",
      active: "nested-url",
    },
  ],
};
