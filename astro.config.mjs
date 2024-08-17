import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Schooltendance Help Centre",
      logo: {
        src: "./src/assets/helpcentre-logo.svg",
        replacesTitle: true,
      },
      social: {
        linkedin: "https://linkedin.com/schooltendance",
        instagram: "https://instagram.com/schooltendance",
        "x.com": "https://x.com/schooltendance",
        email: "mailto:support@schooltendance.com",
        github: "https://github.com/schooltendance",
      },
      head: [
        {
          tag: "script",
          content:
            "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PJFH35KK');",
        },
      ],
      customCss: ["./src/tailwind.css"],
      components: {
        SkipLink: "./src/components/SkipLink.astro", // override the default SkipLink component to load the GTM script in the body
        Footer: "./src/components/ConditionalFooter.astro",
      },
      sidebar: [
        {
          label: "Start Here",
          autogenerate: {
            directory: "start_here",
          },
        },
        {
          label: "Guides",
          autogenerate: {
            directory: "guides",
          },
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
      editLink: {
        baseUrl:
          "https://github.com/schooltendance/schooltendance-help-docs/edit/main",
      },
      pagination: true,
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
