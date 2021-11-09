// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Primitive',
	tagline: 'Documentation and Guides',
	url: 'https://docs.primitive.finanace',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/primitive-logo.png',
	organizationName: 'PrimitiveFinance', // Usually your GitHub org/user name.
	projectName: 'Primitive V2 Docs', // Usually your repo name.

	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					path: 'concepts',
					routeBasePath: 'concepts/',
					sidebarPath: require.resolve('./sidebars.js'),
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						'https://github.com/facebook/docusaurus/edit/main/website/blog/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],
	plugins: [
		[
			"@docusaurus/plugin-content-docs", {
				id: 'core-engine',
				path: 'core-engine',
				routeBasePath:'core-engine/',
				sidebarPath: require.resolve('./sidebars.js')
			}
		],
		[
			"@docusaurus/plugin-content-docs", {
				id: 'using-primitive',
				path: 'using-primitive',
				routeBasePath:'guides/',
				sidebarPath: require.resolve('./sidebars.js')
			}
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			hideableSidebar: true,
			navbar: {
				title: 'Primitive Docs',
				logo: {
					alt: 'Primitive Logo',
					src: 'img/primitive-logo.png',
				},
				items: [
					{
						type: 'doc',
						docId: 'automated-market-makers',
						position: 'left',
						label: 'Concepts',
					},
					{ to: '/core-engine/periphery/primitivev2house', label: 'Core', position: 'left', },
					{
						label: 'Using Primitive',
						to: '/guides/using-the-app/README',
						position: 'left',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Concepts',
								to: '/concepts/automated-market-makers',
							},
							{
								label: 'Core',
								to: '/core-engine/periphery/primitivev2house',
							},
							{
								label: 'Guides',
								to: '/guides/using-the-app/README',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Discord',
								href: 'https://discord.gg/JBM6APT',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/PrimitiveFi',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/primitivefinance/',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()}  Some copyright shit . Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
