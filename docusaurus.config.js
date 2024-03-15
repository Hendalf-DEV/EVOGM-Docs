// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import "dotenv/config";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "OTLEX - Omnia tekniikka avustaja",
  tagline: "- Omnia TiVi Life Extender -",
  favicon: "img/favicon.ico",
  // Set the production url of your site here
  url: "https://omnia-docs.fi",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Hendalf-DEV", // Usually your GitHub org/user name.
  projectName: "Omnia-TiviDocs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fi",
    locales: ["fi", "en", "ru"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/Hendalf-DEV/Omnia-TiviDocs/edit/main/${versionDocsDirPath}/${docPath}`,
          editLocalizedFiles: false,
          editCurrentVersion: false,
          routeBasePath: "docs",
          include: ["**/*.md", "**/*.mdx"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
        },

        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: process.env["trackID"],
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: process.env["containerID"],
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({
      metadata: [
        {
          name: "keywords",
          content:
            "omnia, tieto- ja viestintätekniikka, koodaaminen, omnia github, omnia life extender, otlex, sql koodaus, vscode käyttö",
        },
      ],
      headTags: [
        // Declare a <link> preconnect tag
        {
          tagName: "link",
          attributes: {
            rel: "preconnect",
            href: "https://omnia-docs.fi",
          },
        },
      ],
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      // Replace with your project's social card
      image: "img/seo.png",
      navbar: {
        logo: {
          alt: "Omnia",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docsit",
            position: "left",
            label: "Helpottava materiaali",
          },
          { to: "/blog", label: "Blogi", position: "left" },
          {
            href: "https://github.com/Hendalf-DEV",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      algolia: {
        appId: "CK1AJT9QQ0",

        apiKey: "aa7f256242776af7e00668f60de6f43a",

        indexName: "omnia-fi",

        contextualSearch: true,

        searchParameters: {},

        searchPagePath: false,
      },

      footer: {
        style: "dark",
        // links: [
        //   {
        //     title: "Docs",
        //     items: [],
        //   },
        //   {
        //     title: "More",
        //     items: [
        //       {
        //         label: "Blog",
        //         to: "/blog",
        //       },
        //       {
        //         label: "GitHub",
        //         href: "https://github.com/facebook/docusaurus",
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} OMNIA TIVI Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
