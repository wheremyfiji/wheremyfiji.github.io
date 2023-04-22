// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'wheremyfiji',
  tagline: 'Present Day, Present Time..',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wheremyfiji.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wheremyfiji', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  noIndex: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',

      // announcementBar: {
      //   id: 'support_us',
      //   content: 'я снюхал плотной бэбры..',
      //   backgroundColor: '#0000',
      //   textColor: '#fafbfc',
      //   isCloseable: true,
      // },

      announcementBar: {
        id: 'bar',
        content:
          "😲 я снюхал <strong>плотной</strong> бэбры.. 💀",
        backgroundColor: '#fafbfc', // Defaults to `#fff`.
        textColor: '#091E42', // Defaults to `#000`.
        isCloseable: true, // Defaults to `true`.
      },

      // docs: {
      //   sidebar: {
      //     hideable: false,
      //     autoCollapseCategories: false,
      //   },
      // },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        //title: 'Home',
        title: '[wheremyfiji]',
        // logo: {
        //   alt: 'My Site Logo',
        //   //src: 'img/logo.svg',
        //   src: 'img/test.jpg',
        // },

        //style: 'primary',
        //hideOnScroll: true,

        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // { to: '/blog', label: 'Blog', position: 'left' },
          // { to: '/helloReact', label: 'Hello React', position: 'left' },
          // { to: '/markdown-page', label: 'Markdown', position: 'left' },

          // {
          //   href: 'https://github.com/wheremyfiji',
          //   label: 'GitHub',
          //   position: 'right',
          // },

          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Projects',
        //     items: [
        //       {
        //         label: 'ShikiWatch',
        //         //to: '/docs/intro',
        //         href: 'https://github.com/wheremyfiji/ShikiDev',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Links',
        //     items: [
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/users/199136598103818241',
        //       },
        //       {
        //         label: 'Shikimori',
        //         href: 'https://shikimori.me/wheremyfiji',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //     ],
        //   },
        // ],
        // logo: {
        //   alt: 'Site Logo',
        //   src: 'img/test.jpg',
        //   href: 'https://opensource.fb.com',
        //   //width: 160,
        //   height: 32,
        // },
        //copyright: `© ${new Date().getFullYear()} Wheremyfiji. Built with Docusaurus. 💖`,
        copyright: `© ${new Date().getFullYear()} wheremyfiji 💖 • Built with <a href="https://docusaurus.io/" target="_blank">Docusaurus</a> • <a href="https://github.com/wheremyfiji/ShikiDev/commits/master" target="_blank">Updated ${new Date().toLocaleDateString()}</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
