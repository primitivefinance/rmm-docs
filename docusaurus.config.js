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
	projectName: 'Primitive Protocol Docs', // Usually your repo name.

	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					path: 'docs/concepts',
					routeBasePath: 'concepts/',
					sidebarPath: require.resolve('./sidebars.js'),
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						'https://github.com/primitivefinance/rmm-docs',
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
				id: 'protocol',
				path: 'docs/protocol',
				routeBasePath:'protocol/',
				sidebarPath: require.resolve('./sidebars.js')
			}
		],
		[
			"@docusaurus/plugin-content-docs", {
				id: 'ecosystem',
				path: 'docs/ecosystem',
				routeBasePath:'ecosystem/',
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
						docId: 'overview',
						position: 'left',
						label: 'Concepts',
					},
					{ to: '/protocol/overview', label: 'Protocol', position: 'left', },
					{
						label: 'Ecosystem',
						to: '/ecosystem/overview',
						position: 'left',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Developers',
						items: [
							{
								label: 'Whitepaper',
								to: 'https://primitive.finance/whitepaper-rmm-01.pdf',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/primitivefinance/',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Discord',
								href: 'https://discord.gg/rzRwJ4K',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/PrimitiveFi',
							},
						],
					},
					{
						title: 'Products',
						items: [
							{
								label: 'App',
								href: 'https://app.primitive.finance/',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Primitive.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
				additionalLanguages: ['typescript', 'solidity'],
			},
		}),
};

module.exports = config;
